import { redirect } from "next/navigation";
const defaultId = "01";

const HomePage = async () => {
  redirect(`/categories/${defaultId}`);
};

export default HomePage;
