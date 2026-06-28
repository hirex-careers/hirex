type Props = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold">
        {title}
      </h2>

      <p className="text-gray-500 mt-3">
        {subtitle}
      </p>
    </div>
  );
}