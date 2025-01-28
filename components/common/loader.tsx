import { LoaderCircleIcon } from "lucide-react";

type Props = {
  className?: string;
};

export const Loader = ({ className }: Props) => {
  return (
    <span className="animate-spin">
      <LoaderCircleIcon className={className} />
    </span>
  );
};
