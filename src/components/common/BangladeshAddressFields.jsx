import React, { useState } from 'react';
import {
  BD_DIVISIONS,
  DISTRICTS_BY_DIVISION,
  CHAPAINAWABGANJ_UPAZILAS,
} from '../../utils/bdAddressData';

const OTHER_VALUE = '__OTHER__';

/**
 * Reusable 5-field Bangladesh Address Input Component
 * Fields: গ্রাম, ডাকঘর, বিভাগ, জেলা, উপজেলা
 */
export default function BangladeshAddressFields({ value, onChange }) {
  const division = value?.division || 'রাজশাহী';
  const district = value?.district ?? 'চাঁপাইনবাবগঞ্জ';
  const upazila = value?.upazila ?? 'চাঁপাইনবাবগঞ্জ সদর';
  const postOffice = value?.postOffice || '';
  const village = value?.village || '';

  const districtOptions = DISTRICTS_BY_DIVISION[division] || [];
  const [customDistrictMode, setCustomDistrictMode] = useState(
    () => Boolean(district) && !districtOptions.includes(district)
  );

  const isChapainawabganj = district === 'চাঁপাইনবাবগঞ্জ';
  const [customUpazilaMode, setCustomUpazilaMode] = useState(
    () => isChapainawabganj && Boolean(upazila) && !CHAPAINAWABGANJ_UPAZILAS.includes(upazila)
  );

  const updateField = (patch) => {
    onChange({
      ...value,
      ...patch,
    });
  };

  const handleDivisionChange = (newDiv) => {
    const newDistricts = DISTRICTS_BY_DIVISION[newDiv] || [];
    const nextDistrict = newDiv === 'রাজশাহী' ? 'চাঁপাইনবাবগঞ্জ' : (newDistricts[0] || '');
    const nextUpazila = nextDistrict === 'চাঁপাইনবাবগঞ্জ' ? 'চাঁপাইনবাবগঞ্জ সদর' : '';
    setCustomDistrictMode(false);
    setCustomUpazilaMode(false);
    updateField({
      division: newDiv,
      district: nextDistrict,
      upazila: nextUpazila,
    });
  };

  const handleDistrictSelect = (val) => {
    if (val === OTHER_VALUE) {
      setCustomDistrictMode(true);
      setCustomUpazilaMode(false);
      updateField({ district: '', upazila: '' });
    } else {
      setCustomDistrictMode(false);
      setCustomUpazilaMode(false);
      updateField({
        district: val,
        upazila: val === 'চাঁপাইনবাবগঞ্জ' ? 'চাঁপাইনবাবগঞ্জ সদর' : '',
      });
    }
  };

  const handleUpazilaSelect = (val) => {
    if (val === OTHER_VALUE) {
      setCustomUpazilaMode(true);
      updateField({ upazila: '' });
    } else {
      setCustomUpazilaMode(false);
      updateField({ upazila: val });
    }
  };

  return (
    <>
      <div>
        <label className="form-label">গ্রাম *</label>
        <input
          type="text"
          className="form-input"
          placeholder="যেমন: শাহীবাগ"
          required
          value={village}
          onChange={(e) => updateField({ village: e.target.value })}
        />
      </div>

      <div>
        <label className="form-label">ডাকঘর এবং পোস্ট কোড</label>
        <input
          type="text"
          className="form-input"
          placeholder="যেমন: বটতলাহাট-৬৩০০"
          required
          value={postOffice}
          onChange={(e) => updateField({ postOffice: e.target.value })}
        />
      </div>

      <div>
        <label className="form-label">বিভাগ</label>
        <select
          className="form-input"
          value={division}
          onChange={(e) => handleDivisionChange(e.target.value)}
        >
          {BD_DIVISIONS.map((div) => (
            <option key={div} value={div}>
              {div}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="form-label">জেলা</label>
        <select
          className="form-input"
          value={customDistrictMode ? OTHER_VALUE : (districtOptions.includes(district) ? district : OTHER_VALUE)}
          onChange={(e) => handleDistrictSelect(e.target.value)}
        >
          {districtOptions.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
          <option value={OTHER_VALUE}>অন্যান্য (নিজে লিখুন)</option>
        </select>
        {customDistrictMode && (
          <input
            type="text"
            className="form-input"
            style={{ marginTop: '8px' }}
            placeholder="জেলার নাম লিখুন..."
            value={district}
            onChange={(e) => updateField({ district: e.target.value })}
          />
        )}
      </div>

      <div>
        <label className="form-label">উপজেলা / থানা</label>
        {isChapainawabganj && !customDistrictMode ? (
          <>
            <select
              className="form-input"
              value={customUpazilaMode ? OTHER_VALUE : (CHAPAINAWABGANJ_UPAZILAS.includes(upazila) ? upazila : OTHER_VALUE)}
              onChange={(e) => handleUpazilaSelect(e.target.value)}
            >
              {CHAPAINAWABGANJ_UPAZILAS.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
              <option value={OTHER_VALUE}>অন্যান্য (নিজে লিখুন)</option>
            </select>
            {customUpazilaMode && (
              <input
                type="text"
                className="form-input"
                style={{ marginTop: '8px' }}
                placeholder="উপজেলার নাম লিখুন..."
                value={upazila}
                onChange={(e) => updateField({ upazila: e.target.value })}
              />
            )}
          </>
        ) : (
          <input
            type="text"
            className="form-input"
            placeholder="উপজেলা / থানার নাম লিখুন..."
            value={upazila}
            onChange={(e) => updateField({ upazila: e.target.value })}
          />
        )}
      </div>
    </>
  );
}
