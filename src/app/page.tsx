import RootLayout from "@/modules/common/layouts/layout";



export default function Page({ children }: { children: React.ReactNode }) {
  return <RootLayout>{children}</RootLayout>;
}
