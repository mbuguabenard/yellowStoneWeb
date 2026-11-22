
//2500-KES 2,500
export function formatKes(amount: number): string {
    return `KES ${amount.toLocaleString("en-us")}`;
}

//dry-garden->  "Dry garden"
export function humanise (value: string): string {
    const text= value.replace(/-/g," ");
    return text.charAt( 0 ).toUpperCase() + text.slice(1);
}

//"Wanjiru Kamau" -> "WK"
export function initials (name: string): string {
    return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}
