import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Collaboration({collaboration}) {
  const {t} = useTranslation();
  return (
    <article className="w-full py-12 bg-white">
<section className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-semibold mb-10 text-gray-800">{t("collaborationSection.title")}</h2>
<s className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
{collaboration.map((item) => (
<a
key={item.id}
href={item.url}
target="_blank"
rel="noopener noreferrer"
className="group flex items-center justify-center p-6 bg-gray-100 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md"
>
<img
src={item.image}
alt={item.name}
className="w-40 h-auto filter grayscale group-hover:grayscale-0 transition-all duration-300"
/>
</a>
))}
</s>
</section>
</article>
  )
}