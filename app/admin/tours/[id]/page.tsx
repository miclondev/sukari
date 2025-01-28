import { SingleTourForm } from "../_components/tour-form";

const SingleTourEditPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  return <SingleTourForm />;
};

export default SingleTourEditPage;
