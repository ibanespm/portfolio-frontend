


interface LayoutProps {
        children: React.ReactNode;
    }


export default function SectionLayout({ children }: LayoutProps) {

return (
    <main className="bg-black mx-auto p-20">
        <section>
            {children}
        </section>
    </main>
)

}