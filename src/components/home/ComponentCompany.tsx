import CompanyLogo from "../../assets/CompanyLogo.svg";

const ComponentCompany = () => {
  return (
    <div className="flex items-center">
      <img src={CompanyLogo} />
      <div className="mx-2 text-primary italic text-[24px] font-bold py-7">
        AutoDeals
      </div>
    </div>
  );
};

export default ComponentCompany;
