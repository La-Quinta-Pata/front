import { useTranslation } from "react-i18next";

export default function AboutUsSection({ title, items, CardComponent }) {
  const { t } = useTranslation();

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center text-purple-950 mb-10">
        {title}
      </h2>

      <section
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        gap-10 justify-items-center"
      >
        {items.map((item) => (
          <CardComponent
            key={item.id}
            {...item}
            role={item.roleKey ? t(item.roleKey) : item.role}
          />
        ))}
      </section>
    </section>
  );
}
