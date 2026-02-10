export const mathFormulas = [
 {
  id: 1,
  unit: 10,
  slug: "trigonometric-identities",
  title: "Trigonometric Identities",
  description:
    "Complete formulas of trigonometry including basic identities, angle sum and difference, double angle, half angle, product-to-sum, and sum-to-product identities.",
  formulasCount: 45,
  difficulty: "Intermediate",
  pdfUrl: "/assets/unit-10-class-11-formulas.pdf",
  lastUpdated: "2025-11-11",
  keywords: [
    "trigonometry formulas",
    "trigonometric identities",
    "angle sum formulas",
    "double angle identities",
    "class 11 mathematics"
  ]
}
];

export const totalFormulasCount = mathFormulas.reduce((sum, chapter) => sum + chapter.formulasCount, 0);