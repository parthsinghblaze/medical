'use client';

import { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';

const oncologyProducts = [
    // Capsules
    { product: "Acalabrutinib", strength: "100 mg", form: "Capsules" },
    { product: "Aprepitant", strength: "80 mg, 125 mg", form: "Capsules" },
    { product: "Ceritinib", strength: "150 mg", form: "Capsules" },
    { product: "Crizotinib", strength: "200 mg, 250 mg", form: "Capsules" },
    { product: "Enzalutamide", strength: "40 mg", form: "Capsules" },
    { product: "Estramustine Phosphate", strength: "140 mg", form: "Capsules" },
    { product: "Etoposide", strength: "50 mg", form: "Capsules" },
    { product: "Hydroxyurea", strength: "500 mg", form: "Capsules" },
    { product: "Ibrutinib", strength: "140 mg", form: "Capsules" },
    { product: "Imatinib", strength: "100 mg, 400 mg", form: "Capsules" },
    { product: "Lenalidomide", strength: "5 mg, 10 mg, 25 mg", form: "Capsules" },
    { product: "Lenvatinib", strength: "4 mg, 10 mg", form: "Capsules" },
    { product: "Lomustine", strength: "20 mg, 40 mg", form: "Capsules" },
    { product: "Nilotinib", strength: "200 mg", form: "Capsules" },
    { product: "Palbociclib", strength: "75 mg, 100 mg, 125 mg", form: "Capsules" },
    { product: "Sunitinib Maleate", strength: "12.5 mg, 25 mg, 50 mg", form: "Capsules" },
    { product: "Temozolomide", strength: "20 mg, 100 mg, 250 mg", form: "Capsules" },
    { product: "Thalidomide", strength: "50 mg, 100 mg", form: "Capsules" },
    { product: "Topotecan Hydrochloride", strength: "0.25 mg, 1 mg", form: "Capsules" },

    // Tablets
    { product: "Abiraterone Acetate", strength: "250 mg, 500 mg", form: "Tablets" },
    { product: "Afatinib", strength: "20 mg, 30 mg, 40 mg", form: "Tablets" },
    { product: "Anastrozole", strength: "1 mg", form: "Tablets" },
    { product: "Axitinib", strength: "5 mg", form: "Tablets" },
    { product: "Bicalutamide", strength: "50 mg, 150 mg", form: "Tablets" },
    { product: "Capecitabine", strength: "500 mg", form: "Tablets" },
    { product: "Chlorambucil", strength: "2 mg, 5 mg", form: "Tablets" },
    { product: "Cyclophosphamide", strength: "50 mg", form: "Tablets" },
    { product: "Dasatinib", strength: "20 mg, 50 mg, 70 mg, 100 mg", form: "Tablets" },
    { product: "Eltrombopag Olamine", strength: "25 mg, 50 mg, 75 mg", form: "Tablets" },
    { product: "Erlotinib", strength: "100 mg, 150 mg", form: "Tablets" },
    { product: "Everolimus", strength: "5 mg, 10 mg", form: "Tablets" },
    { product: "Exemestane", strength: "25 mg", form: "Tablets" },
    { product: "Flutamide", strength: "250 mg", form: "Tablets" },
    { product: "Gefitinib", strength: "250 mg", form: "Tablets" },
    { product: "Imatinib", strength: "100 mg, 400 mg", form: "Tablets" },
    { product: "Lapatinib", strength: "250 mg", form: "Tablets" },
    { product: "Letrozole", strength: "2.5 mg, 5 mg", form: "Tablets" },
    { product: "Megestrol Acetate", strength: "20 mg, 40 mg, 80 mg, 160 mg", form: "Tablets" },
    { product: "Melphalan", strength: "2 mg", form: "Tablets" },
    { product: "Mercaptopurine", strength: "50 mg", form: "Tablets" },
    { product: "Methotrexate", strength: "2.5 mg, 5 mg", form: "Tablets" },
    { product: "Olaparib", strength: "100 mg, 150 mg", form: "Tablets" },
    { product: "Pazopanib", strength: "200 mg, 400 mg", form: "Tablets" },
    { product: "Regorafenib", strength: "40 mg", form: "Tablets" },
    { product: "Ribociclib", strength: "200 mg", form: "Tablets" },
    { product: "Sorafenib", strength: "200 mg", form: "Tablets" },
    { product: "Tamoxifen", strength: "10 mg, 20 mg, 40 mg", form: "Tablets" },

    // Lyophilized Injection
    { product: "Albumin", strength: "100 mg", form: "Lyophilized Injection" },
    { product: "Amifostine", strength: "300 mg, 500 mg", form: "Lyophilized Injection" },
    { product: "Amphotericin B (Liposomal)", strength: "50 mg", form: "Lyophilized Injection" },
    { product: "Azacitidine", strength: "100 mg", form: "Lyophilized Injection" },
    { product: "Bleomycin", strength: "15 IU, 30 units", form: "Lyophilized Injection" },
    { product: "Bortezomib", strength: "2 mg, 3.5 mg", form: "Lyophilized Injection" },
    { product: "Busulfan", strength: "60 mg", form: "Lyophilized Injection" },
    { product: "Calcium Folinate", strength: "10 mg", form: "Lyophilized Injection" },
    { product: "Carboplatin", strength: "150 mg", form: "Lyophilized Injection" },
    { product: "Carmustine", strength: "100 mg", form: "Lyophilized Injection" },
    { product: "Cisplatin", strength: "10 mg, 50 mg", form: "Lyophilized Injection" },
    { product: "Cyclophosphamide", strength: "100 mg, 200 mg, 500 mg, 1000 mg", form: "Lyophilized Injection" },
    { product: "Cytarabine", strength: "100 mg, 500 mg, 1 g, 1000 mg", form: "Lyophilized Injection" },
    { product: "Dacarbazine", strength: "100 mg, 200 mg, 500 mg, 1000 mg", form: "Lyophilized Injection" },
    { product: "Dactinomycin", strength: "0.5 mg", form: "Lyophilized Injection" },
    { product: "Daunorubicin", strength: "20 mg", form: "Lyophilized Injection" },
    { product: "Decitabine", strength: "30 mg, 50 mg", form: "Lyophilized Injection" },
    { product: "Doxorubicin Hydrochloride", strength: "10 mg, 50 mg", form: "Lyophilized Injection" },
    { product: "Epirubicin", strength: "10 mg, 50 mg, 100 mg, 200 mg", form: "Lyophilized Injection" },
    { product: "Epirubicin Hydrochloride", strength: "10 mg, 50 mg", form: "Lyophilized Injection" },
    { product: "Etoposide", strength: "100 mg, 200 mg, 500 mg, 1000 mg", form: "Lyophilized Injection" },
    { product: "Filgrastim", strength: "0.3 mg", form: "Lyophilized Injection" },
    { product: "Fludarabine Phosphate", strength: "50 mg, 100 mg", form: "Lyophilized Injection" },
    { product: "Fosaprepitant Dimeglumine", strength: "150 mg", form: "Lyophilized Injection" },
    { product: "Gemcitabine", strength: "200 mg, 1000 mg, 1400 mg", form: "Lyophilized Injection" },
    { product: "Goserelin", strength: "3.6 mg, 10.8 mg", form: "Lyophilized Injection" },
    { product: "Idarubicin", strength: "5 mg, 10 mg, 20 mg", form: "Lyophilized Injection" },
    { product: "Ifosfamide", strength: "1000 mg, 2000 mg", form: "Lyophilized Injection" },
    { product: "Ifosfamide with Mesna", strength: "1 g, 2 g", form: "Lyophilized Injection" },
    { product: "Irinotecan Hydrochloride", strength: "40 mg, 100 mg", form: "Lyophilized Injection" },
    { product: "L-Asparaginase", strength: "5000 IU, 10000 IU", form: "Lyophilized Injection" },
    { product: "Leuprorelin", strength: "1 mg, 3.75 mg", form: "Lyophilized Injection" },
    { product: "Melphalan", strength: "50 mg", form: "Lyophilized Injection" },
    { product: "Methotrexate", strength: "50 mg, 100 mg", form: "Lyophilized Injection" },
    { product: "Mitomycin", strength: "2 mg, 5 mg, 10 mg, 20 mg, 40 mg", form: "Lyophilized Injection" },
    { product: "Oxaliplatin", strength: "100 mg", form: "Lyophilized Injection" },
    { product: "Pemetrexed Disodium", strength: "100 mg, 500 mg", form: "Lyophilized Injection" },
    { product: "Pegaspargase", strength: "3750 IU", form: "Lyophilized Injection" },
    { product: "Plerixafor", strength: "24 mg", form: "Lyophilized Injection" },
    { product: "Temozolomide", strength: "20 mg, 100 mg, 250 mg", form: "Lyophilized Injection" },
    { product: "Thalidomide", strength: "50 mg, 100 mg, 200 mg", form: "Lyophilized Injection" },
    { product: "Thiotepa", strength: "15 mg, 100 mg", form: "Lyophilized Injection" },
    { product: "Topotecan", strength: "1 mg, 2.5 mg, 4 mg", form: "Lyophilized Injection" },
    { product: "Vinblastine Sulphate", strength: "10 mg", form: "Lyophilized Injection" },
    { product: "Vincristine Sulphate", strength: "1 mg, 2 mg, 5 mg, 10 mg", form: "Lyophilized Injection" },
    { product: "Zoledronic Acid", strength: "4 mg, 5 mg", form: "Lyophilized Injection" },

    // Injection
    { product: "Bendamustine Hydrochloride", strength: "100 mg", form: "Injection" },
    { product: "Carboplatin", strength: "50 mg, 150 mg, 450 mg, 600 mg", form: "Injection" },
    { product: "Cisplatin", strength: "10 mg, 50 mg", form: "Injection" },
    { product: "Cladribine", strength: "10 mg", form: "Injection" },
    { product: "Cyclophosphamide", strength: "50 mg, 100 mg, 200 mg, 500 mg, 1000 mg, 2000 mg", form: "Injection" },
    { product: "Cytarabine", strength: "100 mg, 500 mg, 1000 mg", form: "Injection" },
    { product: "Docetaxel", strength: "20 mg, 80 mg, 120 mg", form: "Injection" },
    { product: "Doxorubicin", strength: "10 mg, 50 mg, 100 mg", form: "Injection" },
    { product: "Eribulin Mesylate", strength: "1 mg", form: "Injection" },
    { product: "Etoposide", strength: "100 mg, 200 mg, 500 mg, 1000 mg", form: "Injection" },
    { product: "Filgrastim", strength: "300 mcg", form: "Injection" },
    { product: "Fluorouracil", strength: "250 mg, 500 mg", form: "Injection" },
    { product: "Irinotecan Hydrochloride", strength: "40 mg, 100 mg", form: "Injection" },
    { product: "Leucovorin Calcium", strength: "3 mg, 15 mg, 50 mg", form: "Injection" },
    { product: "Leuprorelin", strength: "1 mg, 3.75 mg", form: "Injection" },
    { product: "Methotrexate", strength: "50 mg, 250 mg, 500 mg, 1000 mg", form: "Injection" },
    { product: "Mitomycin", strength: "2 mg, 5 mg, 10 mg, 20 mg", form: "Injection" },
    { product: "Mitoxantrone", strength: "20 mg", form: "Injection" },
    { product: "Oxaliplatin", strength: "25 mg, 50 mg, 100 mg", form: "Injection" },
    { product: "Paclitaxel", strength: "30 mg, 100 mg, 150 mg, 260 mg, 300 mg", form: "Injection" },
    { product: "Thalidomide", strength: "50 mg, 100 mg, 200 mg", form: "Injection" },
    { product: "Topotecan", strength: "2.5 mg, 4 mg", form: "Injection" },
    { product: "Vinblastine Sulphate", strength: "10 mg", form: "Injection" },
    { product: "Vincristine Sulphate", strength: "1 mg, 2 mg, 5 mg, 10 mg", form: "Injection" },
    { product: "Vinorelbine", strength: "10 mg, 50 mg", form: "Injection" },
    { product: "Busulphan", strength: "60 mg", form: "Injection" },
    { product: "Cabazitaxel", strength: "60 mg", form: "Injection" },
    { product: "Carboplatin", strength: "150 mg, 450 mg", form: "Injection" },
    { product: "Cisplatin", strength: "10 mg, 50 mg", form: "Injection" },
    { product: "Cladribine", strength: "10 mg", form: "Injection" },
    { product: "Cytarabine", strength: "100 mg, 500 mg, 1 g", form: "Injection" },
    { product: "Docetaxel", strength: "20 mg, 80 mg, 120 mg", form: "Injection" },
    { product: "Epirubicin", strength: "10 mg, 50 mg", form: "Injection" },
    { product: "Etoposide", strength: "100 mg", form: "Injection" },
    { product: "Fluorouracil", strength: "500 mg, 1 g", form: "Injection" },
    { product: "Gemcitabine", strength: "200 mg, 1000 mg, 1400 mg", form: "Injection" },
    { product: "Granisetron", strength: "1 mg, 3 mg", form: "Injection" },
    { product: "Ibandronic Acid", strength: "1 mg, 3 mg", form: "Injection" }
];

export default function OncologyTable() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedForm, setSelectedForm] = useState("All");

    // Extract unique dosage forms for filter
    const dosageForms = ["All", ...Array.from(new Set(oncologyProducts.map(item => item.form)))];

    const filteredProducts = useMemo(() => {
        return oncologyProducts.filter(item => {
            const matchesSearch = item.product.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesForm = selectedForm === "All" || item.form === selectedForm;
            return matchesSearch && matchesForm;
        });
    }, [searchQuery, selectedForm]);

    return (
        <section className="py-16 bg-white dark:bg-[#0B1121]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-primary dark:text-white mb-4">
                        Oncology Products
                    </h2>
                    <div className="flex justify-center mb-8">
                        <svg width="100" height="20" viewBox="0 0 100 20" fill="none" className="text-secondary dark:text-blue-400">
                            <path d="M0 10 Q12.5 0 25 10 T50 10 T75 10 T100 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    </div>

                    {/* Search and Filter Controls */}
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-4xl mx-auto">
                        <div className="relative w-full md:w-1/2">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search Product Name..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all shadow-sm"
                            />
                        </div>
                        <div className="relative w-full md:w-1/3">
                            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <select
                                value={selectedForm}
                                onChange={(e) => setSelectedForm(e.target.value)}
                                className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none appearance-none cursor-pointer shadow-sm"
                            >
                                {dosageForms.map(form => (
                                    <option key={form} value={form}>{form}</option>
                                ))}
                            </select>
                            {/* Custom arrow for select if needed, but appearance-none + custom background is easier. Using simple arrow for now */}
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto rounded-xl shadow-xl border border-blue-100 dark:border-blue-900 bg-white dark:bg-gray-800">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-primary text-white">
                                <th className="p-4 text-sm md:text-base font-bold uppercase tracking-wider whitespace-nowrap">Product</th>
                                <th className="p-4 text-sm md:text-base font-bold uppercase tracking-wider whitespace-nowrap">Strength</th>
                                <th className="p-4 text-sm md:text-base font-bold uppercase tracking-wider whitespace-nowrap">Dosage Form</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-blue-50 dark:divide-gray-700">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                                    >
                                        <td className="p-4 text-gray-800 dark:text-gray-200 font-medium">{item.product}</td>
                                        <td className="p-4 text-gray-600 dark:text-gray-300">{item.strength}</td>
                                        <td className="p-4 text-gray-600 dark:text-gray-300">{item.form}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={3} className="p-8 text-center text-gray-500 dark:text-gray-400">
                                        No products found matching your criteria.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
                    Showing {filteredProducts.length} of {oncologyProducts.length} products
                </div>
            </div>
        </section>
    );
}
