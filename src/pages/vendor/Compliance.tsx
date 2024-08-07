import ComplianceForm from "../../components/vendor/compliance_forms/ComplianceForm";
import Logo from "../../components/vendor/shared/Logo";
import PageSubTitle from "../../components/vendor/shared/PageSubTitle";
import PageTitle from "../../components/vendor/shared/PageTitle";
import AuthLayout from "./layouts/AuthLayout";

const VendorCompliance: React.FC = () => {
  return (
    <AuthLayout>
      <div className="screen">
        <Logo />
        <PageTitle text="Compliance Details" />
        <PageSubTitle>
          Onboard by completing the compliance details
        </PageSubTitle>
        <>
          <ComplianceForm />
        </>
      </div>
    </AuthLayout>
  );
};

export default VendorCompliance;
