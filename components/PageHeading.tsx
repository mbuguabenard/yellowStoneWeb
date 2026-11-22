interface PageHeadingProps {
    title: string;
    subtitle?: string;
}

export default function PageHeading({ title, subtitle}: PageHeadingProps) {
    return (
      <div className="mb-10">
        <h1 className="font-heading text-4xl font-semibold text-leaf-900">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-leaf-900/70">{subtitle}</p>}
      </div>
        
       
    );
}