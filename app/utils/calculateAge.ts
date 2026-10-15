export function calculateAge(birthDate: string, today = new Date()): number {
    const birth = new Date(birthDate);
    const age = today.getFullYear() - birth.getFullYear();
    const hasHadBirthdayThisYear =
        today.getMonth() > birth.getMonth() ||
        (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());

    return hasHadBirthdayThisYear ? age : age - 1;
}
