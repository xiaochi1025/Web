export function formatUserName(user: { firstName?: string; lastName?: string; name?: string }): string {
  if (user.firstName && user.lastName) {
    return `${user.firstName} ${user.lastName}`;
  }
  return user.name || 'Anonymous';
}

export function getUserInitials(user: { name?: string }): string {
  if (!user.name) return 'A';
  const parts = user.name.split(' ');
  return parts.length > 1
    ? `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase()
    : user.name.slice(0, 2).toUpperCase();
}
