import { useState } from 'react';
import { Camera, Trash2, ZoomIn, ZoomOut, Check, Crop, X } from 'lucide-react';

export default function ImageCropModal({
  isOpen,
  imageSrc,
  onClose,
  onCropComplete,
  title = "ছবি রিসাইজ ও পজিশন করুন"
}) {
  const [cropZoom, setCropZoom] = useState(1);
  const [cropOffset, setCropOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  if (!isOpen || !imageSrc) return null;

  const handleApply = () => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const size = 500; // 500x500 HD avatar
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, size, size);

      const previewBox = 280;
      const scaleToCanvas = size / previewBox;

      const baseScale = Math.max(previewBox / img.width, previewBox / img.height);
      const totalScale = baseScale * cropZoom * scaleToCanvas;

      const drawW = img.width * totalScale;
      const drawH = img.height * totalScale;

      const centerX = size / 2;
      const centerY = size / 2;

      const drawX = centerX - (drawW / 2) + (cropOffset.x * scaleToCanvas);
      const drawY = centerY - (drawH / 2) + (cropOffset.y * scaleToCanvas);

      ctx.drawImage(img, drawX, drawY, drawW, drawH);

      const croppedDataUrl = canvas.toDataURL('image/jpeg', 0.88);
      onCropComplete(croppedDataUrl);
      onClose();
    };
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100001,
      padding: '16px'
    }}>
      <div style={{
        background: 'var(--bg-card, #1e293b)',
        borderRadius: '16px',
        width: '100%',
        maxWidth: '440px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        border: '1px solid var(--border-color, rgba(255,255,255,0.1))',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Modal Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 20px',
          borderBottom: '1px solid var(--border-color, rgba(255,255,255,0.08))'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '1.05rem' }}>
            <Crop size={20} style={{ color: 'var(--primary-500)' }} />
            <span>{title}</span>
          </div>
          <button 
            type="button" 
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '4px' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '16px', textAlign: 'center' }}>
            ছবিটি ড্র্যাগ (Drag) করে পজিশন করুন এবং স্লাইডার দিয়ে সাইজ এডজাস্ট করুন
          </p>

          <div 
            style={{
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              position: 'relative',
              overflow: 'hidden',
              cursor: isDragging ? 'grabbing' : 'grab',
              boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.55), 0 0 0 3px #10b981',
              background: '#0f172a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              userSelect: 'none',
              touchAction: 'none'
            }}
            onMouseDown={(e) => {
              setIsDragging(true);
              setDragStart({ x: e.clientX - cropOffset.x, y: e.clientY - cropOffset.y });
            }}
            onMouseMove={(e) => {
              if (!isDragging) return;
              setCropOffset({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y
              });
            }}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchStart={(e) => {
              if (e.touches.length === 1) {
                setIsDragging(true);
                setDragStart({ x: e.touches[0].clientX - cropOffset.x, y: e.touches[0].clientY - cropOffset.y });
              }
            }}
            onTouchMove={(e) => {
              if (!isDragging || e.touches.length !== 1) return;
              setCropOffset({
                x: e.touches[0].clientX - dragStart.x,
                y: e.touches[0].clientY - dragStart.y
              });
            }}
            onTouchEnd={() => setIsDragging(false)}
          >
            <img 
              src={imageSrc} 
              alt="Crop preview" 
              draggable={false}
              style={{
                position: 'absolute',
                transform: `translate(${cropOffset.x}px, ${cropOffset.y}px) scale(${cropZoom})`,
                transformOrigin: 'center center',
                maxWidth: 'none',
                maxHeight: 'none',
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                pointerEvents: 'none'
              }} 
            />
          </div>

          <div style={{ width: '100%', marginTop: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button 
              type="button" 
              className="btn btn-ghost btn-sm" 
              onClick={() => setCropZoom(prev => Math.max(0.5, prev - 0.1))}
              style={{ padding: '6px 8px' }}
              title="জুম আউট"
            >
              <ZoomOut size={18} />
            </button>
            <input 
              type="range" 
              min="0.5" 
              max="3" 
              step="0.05"
              value={cropZoom}
              onChange={(e) => setCropZoom(parseFloat(e.target.value))}
              style={{ flex: 1, accentColor: 'var(--primary-500)' }}
            />
            <button 
              type="button" 
              className="btn btn-ghost btn-sm" 
              onClick={() => setCropZoom(prev => Math.min(3, prev + 0.1))}
              style={{ padding: '6px 8px' }}
              title="জুম ইন"
            >
              <ZoomIn size={18} />
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '6px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            <span>ছোট (0.5x)</span>
            <span>স্বাভাবিক (1x)</span>
            <span>বড় (3x)</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: '12px',
          padding: '14px 20px',
          borderTop: '1px solid var(--border-color, rgba(255,255,255,0.08))',
          background: 'rgba(0,0,0,0.1)'
        }}>
          <button 
            type="button" 
            className="btn btn-ghost btn-sm"
            onClick={onClose}
          >
            বাতিল
          </button>
          <button 
            type="button" 
            className="btn btn-primary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            onClick={handleApply}
          >
            <Check size={16} />
            <span>সম্পন্ন করুন</span>
          </button>
        </div>
      </div>
    </div>
  );
}
