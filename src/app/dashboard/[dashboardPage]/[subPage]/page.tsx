"use client";

import PageLayout from "@/components/PageLayout";
import PageNotFound from "@/components/shared/PageNotFound";
import { usePathname } from "next/navigation";

const DashboardPage = () => {
  const router = usePathname();
  const selectedRouter = router.split("/")[3];

  const vendorComponents = () => {
    if (selectedRouter === "personal") {
      return (
        <>
          <p>personal</p>
        </>
      );
    } else if (selectedRouter === "securidty") {
      return (
        <>
          <p>securidty</p>
        </>
      );
    }
  };

  console.log("router", selectedRouter);

  return (
    <PageLayout>
      {vendorComponents() ? <> {vendorComponents()}</> : <PageNotFound />}
    </PageLayout>
  );
};

export default DashboardPage;
