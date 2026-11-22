//the shape pf one entry from imageSlots.ts

interface Slot{
    aspect: string;
    label: string;
}

interface ImagePlaceholderProps {
    color: string; 
    slot: Slot;
    note?: string;
    className?: string; 
}

export default function ImagePlaceholder ({ color, slot, note, className=""}: ImagePlaceholderProps) {
    return (
        <div 
        role="img"
        aria-label={`Image placeholder: ${slot.label}`}
        className={`flex items-center justify-center ${slot.aspect} ${className}`}
        style={{backgroundColor: color}}
        >
            {/*A dark chip keeps the white text readable on any background colour. */}
            <div className="rounded bg-black/45 px-3 py-2 text-center text-xs leading-snug text-white">
            <p>{slot.label}</p>
            {note && <p className="opacity-80">{note}</p>}
            </div>

        </div>
    );

}