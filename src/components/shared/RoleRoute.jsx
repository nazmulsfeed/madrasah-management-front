import { Navigate } from 'react-router-dom';
import useAuthStore from '../../store/authStore';

/**
 * RoleRoute Guard
 * Restricts route access to authorized roles or permissions.
 * If user is unauthorized (e.g. student or guardian accessing admin routes), redirects them to /dashboard.
 */
export default function RoleRoute({ 
  children, 
  allowedRoles = [], 
  deniedRoles = ['student', 'guardian'], 
  permission = null 
}) {
  const { user, token } = useAuthStore();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const userType = user?.userType;
  const adminRole = user?.adminRole;

  // Super Admin & Co-Super Admin have universal access
  const isSuperOrAdmin = ['super_admin', 'co_super_admin', 'admin'].includes(userType) ||
                         ['co_super_admin', 'admin'].includes(adminRole);

  if (isSuperOrAdmin) {
    return children;
  }

  // If explicit deniedRoles are matched (and user is not super_admin)
  if (deniedRoles && deniedRoles.length > 0) {
    if (deniedRoles.includes(userType)) {
      return <Navigate to="/dashboard" replace />;
    }
  }

  // If allowedRoles is specified, user must be in allowedRoles
  if (allowedRoles && allowedRoles.length > 0) {
    const hasRole = allowedRoles.includes(userType) || (adminRole && allowedRoles.includes(adminRole));
    if (!hasRole) {
      // Check granular permission fallback if specified
      if (permission) {
        try {
          const userPerms = JSON.parse(localStorage.getItem('userPermissions') || '{}');
          if (userPerms[permission] === true || userPerms[permission] === 'true') {
            return children;
          }
        } catch (e) {}
      }
      return <Navigate to="/dashboard" replace />;
    }
  }

  // If permission is specified, check userPermissions
  if (permission) {
    try {
      const userPerms = JSON.parse(localStorage.getItem('userPermissions') || '{}');
      if (!userPerms[permission]) {
        return <Navigate to="/dashboard" replace />;
      }
    } catch (e) {
      return <Navigate to="/dashboard" replace />;
    }
  }

  return children;
}
