import SectionHeading from "./SectionHeading";

const steps = [
    {
     number: "1",
     title: "Find a landscape you love",
     text: "Browse finished projects by style and space,from courtyards to estates.",
    },
    {
        number:"2",
        title: "Shop the plants and materials",
        text: "Every item in a project is tagged.See details,compare sellers and buy from the one you choose."
    },
    {
        number: "3",
        title: "Get it built",
        text: "Want this done for you? Send a short brief to the professional behind the project.",
    },

];

export default function HowItWorks() {
    return (
        <section className="bg-sand-100">
            <div className="mx-auto max-w-6xl px-4 py-16">
                <SectionHeading title="How it works" />
                <ol className="grid gap-6 sm:grid-cols-3">
                    {steps.map((step) => (
                        <li key={step.number} className="rounded-2xl bg-white p-6">
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-leaf-700 font-medium text-white">
                                {step.number}
                            </span>
                            <h3 className="mt-4 font-heading text-lg font-semibold"> {step.title}</h3>
                            <p className="mt-2 text-sm text-leaf-900/70"> {step.text} </p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}