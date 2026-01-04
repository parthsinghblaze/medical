'use client';

import { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';

type APICategory =
    | "Oncology APIs"
    | "Anti Diabetic"
    | "Anti Biotics"
    | "Peptide API"
    | "Anti Fungal"
    | "Fermentation API"
    | "Other API";

interface APIProduct {
    name: string;
    casNumber: string;
    grade: string; // or "FDF Form" / "Common Strengths" depending on table type, but I'll normalize specific fields map to generic ones if needed, or union them
    category: APICategory;
    // Some tables have different headers (Molecule, FDF Form, Strength). I will normalize to:
    // Product Name (Molecule/API Name)
    // Identifier (CAS Number/FDF Form)
    // Specification (Grade/Common Strengths)
    col1: string; // API Name / Molecule
    col2: string; // CAS Number / FDF Form
    col3: string; // Grade / Common Strengths
}

const apiData: APIProduct[] = [
    // Oncology APIs
    { name: "Bicalutamide", casNumber: "90357-06-5", grade: "Upon Request", category: "Oncology APIs", col1: "Bicalutamide", col2: "90357-06-5", col3: "Upon Request" },
    { name: "Ifosfamide", casNumber: "3778-73-2", grade: "Upon Request", category: "Oncology APIs", col1: "Ifosfamide", col2: "3778-73-2", col3: "Upon Request" },
    { name: "Ifosfamide Sterile", casNumber: "3778-73-2", grade: "Upon Request", category: "Oncology APIs", col1: "Ifosfamide Sterile", col2: "3778-73-2", col3: "Upon Request" },
    { name: "Cyclophosphamide", casNumber: "50-18-0", grade: "Upon Request", category: "Oncology APIs", col1: "Cyclophosphamide", col2: "50-18-0", col3: "Upon Request" },
    { name: "Cyclophosphamide Sterile", casNumber: "50-18-0", grade: "Upon Request", category: "Oncology APIs", col1: "Cyclophosphamide Sterile", col2: "50-18-0", col3: "Upon Request" },
    { name: "Mesna", casNumber: "3375-50-6", grade: "Upon Request", category: "Oncology APIs", col1: "Mesna", col2: "3375-50-6", col3: "Upon Request" },
    { name: "Mercaptopurine", casNumber: "50-44-2", grade: "Upon Request", category: "Oncology APIs", col1: "Mercaptopurine", col2: "50-44-2", col3: "Upon Request" },
    { name: "Azathioprine", casNumber: "446-86-6", grade: "Upon Request", category: "Oncology APIs", col1: "Azathioprine", col2: "446-86-6", col3: "Upon Request" },
    { name: "Enzalutamide", casNumber: "915087-33-1", grade: "Upon Request", category: "Oncology APIs", col1: "Enzalutamide", col2: "915087-33-1", col3: "Upon Request" },
    { name: "Nilotinib", casNumber: "641571-10-0", grade: "Upon Request", category: "Oncology APIs", col1: "Nilotinib", col2: "641571-10-0", col3: "Upon Request" },
    { name: "Palbociclib", casNumber: "571188-59-5", grade: "Upon Request", category: "Oncology APIs", col1: "Palbociclib", col2: "571188-59-5", col3: "Upon Request" },
    { name: "Ibrutinib", casNumber: "936563-96-1", grade: "Upon Request", category: "Oncology APIs", col1: "Ibrutinib", col2: "936563-96-1", col3: "Upon Request" },
    { name: "Capecitabine", casNumber: "154361-50-9", grade: "USP/EP/IP", category: "Oncology APIs", col1: "Capecitabine", col2: "154361-50-9", col3: "USP/EP/IP" },
    { name: "Fulvestrant", casNumber: "129453-61-8", grade: "IP/BP/EP/USP", category: "Oncology APIs", col1: "Fulvestrant", col2: "129453-61-8", col3: "IP/BP/EP/USP" },
    { name: "Bicalutamide", casNumber: "90357-06-5", grade: "USP/EP/IP", category: "Oncology APIs", col1: "Bicalutamide", col2: "90357-06-5", col3: "USP/EP/IP" },
    { name: "Lapatinib ditosylate", casNumber: "388082-78-8", grade: "IP/IH", category: "Oncology APIs", col1: "Lapatinib ditosylate", col2: "388082-78-8", col3: "IP/IH" },
    { name: "Sorafenib Tosylate", casNumber: "475207-59-1", grade: "IH/USP", category: "Oncology APIs", col1: "Sorafenib Tosylate", col2: "475207-59-1", col3: "IH/USP" },
    { name: "Pomalidomide", casNumber: "19171-19-8", grade: "IH", category: "Oncology APIs", col1: "Pomalidomide", col2: "19171-19-8", col3: "IH" },
    { name: "Bortezomib", casNumber: "179324-69-7", grade: "IH/IP", category: "Oncology APIs", col1: "Bortezomib", col2: "179324-69-7", col3: "IH/IP" },
    { name: "Pemetrexed disodium", casNumber: "150399-23-8", grade: "IP", category: "Oncology APIs", col1: "Pemetrexed disodium", col2: "150399-23-8", col3: "IP" },
    { name: "Temsirolimus", casNumber: "162635-04-3", grade: "IH", category: "Oncology APIs", col1: "Temsirolimus", col2: "162635-04-3", col3: "IH" },
    { name: "Everolimus", casNumber: "159351-69-6", grade: "IH/EP/BP/USP", category: "Oncology APIs", col1: "Everolimus", col2: "159351-69-6", col3: "IH/EP/BP/USP" },
    { name: "Bicalutamide", casNumber: "90357-06-5", grade: "Upon Request", category: "Oncology APIs", col1: "Bicalutamide", col2: "90357-06-5", col3: "Upon Request" },
    { name: "Ifosfamide", casNumber: "3778-73-2", grade: "Upon Request", category: "Oncology APIs", col1: "Ifosfamide", col2: "3778-73-2", col3: "Upon Request" },

    // Anti Diabetic
    { name: "Canagliflozin", casNumber: "842133-18-0", grade: "Upon Request", category: "Anti Diabetic", col1: "Canagliflozin", col2: "842133-18-0", col3: "Upon Request" },
    { name: "Dapagliflozin", casNumber: "461432-26-8", grade: "Upon Request", category: "Anti Diabetic", col1: "Dapagliflozin", col2: "461432-26-8", col3: "Upon Request" },
    { name: "Empagliflozin", casNumber: "864070-44-0", grade: "Upon Request", category: "Anti Diabetic", col1: "Empagliflozin", col2: "864070-44-0", col3: "Upon Request" },
    { name: "Canagliflozin", casNumber: "842133-18-0", grade: "Upon Request", category: "Anti Diabetic", col1: "Canagliflozin", col2: "842133-18-0", col3: "Upon Request" },

    // Anti Biotics
    { name: "Fosfomycin Calcium", casNumber: "26016-98-8", grade: "Upon Request", category: "Anti Biotics", col1: "Fosfomycin Calcium", col2: "26016-98-8", col3: "Upon Request" },
    { name: "Colistimethate Sodium", casNumber: "8068-28-8", grade: "Upon Request", category: "Anti Biotics", col1: "Colistimethate Sodium", col2: "8068-28-8", col3: "Upon Request" },
    { name: "Polymyxin B Sulphate", casNumber: "1405-20-5", grade: "Upon Request", category: "Anti Biotics", col1: "Polymyxin B Sulphate", col2: "1405-20-5", col3: "Upon Request" },
    { name: "Fosfomycin Calcium", casNumber: "26016-98-8", grade: "Upon Request", category: "Anti Biotics", col1: "Fosfomycin Calcium", col2: "26016-98-8", col3: "Upon Request" },
    { name: "L-Glutathione", casNumber: "70-18-8", grade: "Upon Request", category: "Anti Biotics", col1: "L-Glutathione", col2: "70-18-8", col3: "Upon Request" },
    { name: "Colistimethate Sodium", casNumber: "8068-28-8", grade: "Upon Request", category: "Anti Biotics", col1: "Colistimethate Sodium", col2: "8068-28-8", col3: "Upon Request" },
    { name: "Polymyxin B Sulphate", casNumber: "1405-20-5", grade: "Upon Request", category: "Anti Biotics", col1: "Polymyxin B Sulphate", col2: "1405-20-5", col3: "Upon Request" },
    { name: "Retapamulin", casNumber: "224452-66-8", grade: "Upon Request", category: "Anti Biotics", col1: "Retapamulin", col2: "224452-66-8", col3: "Upon Request" },
    { name: "Fosfomycin Trometamol", casNumber: "78964-85-9", grade: "Upon Request", category: "Anti Biotics", col1: "Fosfomycin Trometamol", col2: "78964-85-9", col3: "Upon Request" },
    { name: "Tigecycline", casNumber: "220620-09-7", grade: "Upon Request", category: "Anti Biotics", col1: "Tigecycline", col2: "220620-09-7", col3: "Upon Request" },
    { name: "Fosfomycin Sodium", casNumber: "26016-99-9", grade: "Upon Request", category: "Anti Biotics", col1: "Fosfomycin Sodium", col2: "26016-99-9", col3: "Upon Request" },

    // Peptide API
    { name: "Buserlin acetate", casNumber: "57982-77-1", grade: "Upon Request", category: "Peptide API", col1: "Buserlin acetate", col2: "57982-77-1", col3: "Upon Request" },
    { name: "Calcitonin Salmon Acetate", casNumber: "47931-85-1", grade: "Upon Request", category: "Peptide API", col1: "Calcitonin Salmon Acetate", col2: "47931-85-1", col3: "Upon Request" },
    { name: "Carbetocin Acetate", casNumber: "37025-55-1", grade: "Upon Request", category: "Peptide API", col1: "Carbetocin Acetate", col2: "37025-55-1", col3: "Upon Request" },
    { name: "Cetrorelix Acetate", casNumber: "120287-85-6", grade: "Upon Request", category: "Peptide API", col1: "Cetrorelix Acetate", col2: "120287-85-6", col3: "Upon Request" },
    { name: "Desmopressin Acetate", casNumber: "16679-58-6", grade: "Upon Request", category: "Peptide API", col1: "Desmopressin Acetate", col2: "16679-58-6", col3: "Upon Request" },
    { name: "Gonadorelin Acetate", casNumber: "33515-09-2", grade: "Upon Request", category: "Peptide API", col1: "Gonadorelin Acetate", col2: "33515-09-2", col3: "Upon Request" },
    { name: "Leuprorelin Acetate", casNumber: "74381-53-6", grade: "Upon Request", category: "Peptide API", col1: "Leuprorelin Acetate", col2: "74381-53-6", col3: "Upon Request" },
    { name: "Octreotide Acetate", casNumber: "83150-76-9", grade: "Upon Request", category: "Peptide API", col1: "Octreotide Acetate", col2: "83150-76-9", col3: "Upon Request" },
    { name: "Oxytocin Acetate/Con.Solution", casNumber: "50-56-6", grade: "Upon Request", category: "Peptide API", col1: "Oxytocin Acetate/Con.Solution", col2: "50-56-6", col3: "Upon Request" },
    { name: "Terlipressin Acetate", casNumber: "14636-12-5", grade: "Upon Request", category: "Peptide API", col1: "Terlipressin Acetate", col2: "14636-12-5", col3: "Upon Request" },
    { name: "Tetracosactide Acetate", casNumber: "16960-16-0", grade: "Upon Request", category: "Peptide API", col1: "Tetracosactide Acetate", col2: "16960-16-0", col3: "Upon Request" },
    { name: "Vasopressin Acetate", casNumber: "11000-17-2", grade: "Upon Request", category: "Peptide API", col1: "Vasopressin Acetate", col2: "11000-17-2", col3: "Upon Request" },
    { name: "Semaglutide", casNumber: "910463-68-2", grade: "Upon Request", category: "Peptide API", col1: "Semaglutide", col2: "910463-68-2", col3: "Upon Request" },
    { name: "Terliparatide", casNumber: "52232-67-4", grade: "Upon Request", category: "Peptide API", col1: "Terliparatide", col2: "52232-67-4", col3: "Upon Request" },
    { name: "Liraglutide", casNumber: "204656-20-2", grade: "Upon Request", category: "Peptide API", col1: "Liraglutide", col2: "204656-20-2", col3: "Upon Request" },
    { name: "Trizapatide", casNumber: "2023788-19-2", grade: "Upon Request", category: "Peptide API", col1: "Trizapatide", col2: "2023788-19-2", col3: "Upon Request" },
    { name: "Cetrorelix", casNumber: "120287-85-6", grade: "Upon Request", category: "Peptide API", col1: "Cetrorelix", col2: "120287-85-6", col3: "Upon Request" },
    { name: "Lenreotide", casNumber: "108736-35-2", grade: "Upon Request", category: "Peptide API", col1: "Lenreotide", col2: "108736-35-2", col3: "Upon Request" },
    { name: "Etelcalcetide", casNumber: "881375-14-0", grade: "Upon Request", category: "Peptide API", col1: "Etelcalcetide", col2: "881375-14-0", col3: "Upon Request" },
    { name: "Ganirelix", casNumber: "124904-93-4", grade: "Upon Request", category: "Peptide API", col1: "Ganirelix", col2: "124904-93-4", col3: "Upon Request" },
    { name: "Plecanatide", casNumber: "467426-54-6", grade: "Upon Request", category: "Peptide API", col1: "Plecanatide", col2: "467426-54-6", col3: "Upon Request" },
    { name: "Eptifibatide", casNumber: "188627-80-7", grade: "Upon Request", category: "Peptide API", col1: "Eptifibatide", col2: "188627-80-7", col3: "Upon Request" },
    { name: "Degarelix Acetate", casNumber: "214766-78-6", grade: "IH", category: "Peptide API", col1: "Degarelix Acetate", col2: "214766-78-6", col3: "IH" },

    // Anti Fungal
    { name: "Anidulafungin", casNumber: "166663-25-8", grade: "IH", category: "Anti Fungal", col1: "Anidulafungin", col2: "166663-25-8", col3: "IH" },
    { name: "Amorolfine Hydrochloride", casNumber: "78613-35-1", grade: "IH/IP", category: "Anti Fungal", col1: "Amorolfine Hydrochloride", col2: "78613-35-1", col3: "IH/IP" },
    { name: "Micafungin Sodium", casNumber: "208538-73-2", grade: "USP/IH", category: "Anti Fungal", col1: "Micafungin Sodium", col2: "208538-73-2", col3: "USP/IH" },
    { name: "Caspofungin Acetate", casNumber: "179463-17-3", grade: "IH", category: "Anti Fungal", col1: "Caspofungin Acetate", col2: "179463-17-3", col3: "IH" },

    // Fermentation API
    { name: "Bleomycin Sulfate", casNumber: "9041-93-4", grade: "IP/USP", category: "Fermentation API", col1: "Bleomycin Sulfate", col2: "9041-93-4", col3: "IP/USP" },
    { name: "Tacrolimus", casNumber: "104987-11-3", grade: "IP/USP/EP/BP", category: "Fermentation API", col1: "Tacrolimus", col2: "104987-11-3", col3: "IP/USP/EP/BP" },
    { name: "Sirolimus", casNumber: "53123-88-9", grade: "USP/IH", category: "Fermentation API", col1: "Sirolimus", col2: "53123-88-9", col3: "USP/IH" },
    { name: "Ascomycin", casNumber: "104987-12-4", grade: "IH", category: "Fermentation API", col1: "Ascomycin", col2: "104987-12-4", col3: "IH" },
    { name: "Echinocandin B HCL", casNumber: "110323-95-0", grade: "Upon Request", category: "Fermentation API", col1: "Echinocandin B HCL", col2: "110323-95-0", col3: "Upon Request" },
    { name: "Mitomycin C", casNumber: "50-07-7", grade: "IP/EP/USP", category: "Fermentation API", col1: "Mitomycin C", col2: "50-07-7", col3: "IP/EP/USP" },

    // Other API
    { name: "Sugammadex sodium", casNumber: "343306-79-6", grade: "IH", category: "Other API", col1: "Sugammadex sodium", col2: "343306-79-6", col3: "IH" },
    { name: "Entecavir", casNumber: "142217-69-4", grade: "IP/IH/USP", category: "Other API", col1: "Entecavir", col2: "142217-69-4", col3: "IP/IH/USP" },
    { name: "Edaravone", casNumber: "89-25-8", grade: "JP/IH", category: "Other API", col1: "Edaravone", col2: "89-25-8", col3: "JP/IH" },
];

export default function APITables() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<APICategory | "All">("All");

    const categories: APICategory[] = [
        "Oncology APIs", "Anti Diabetic", "Anti Biotics", "Peptide API", "Anti Fungal", "Fermentation API", "Other API"
    ];

    const filteredData = useMemo(() => {
        return apiData.filter(item => {
            const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.casNumber.includes(searchQuery);
            const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <section className="py-16 bg-white dark:bg-[#0B1121]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-primary dark:text-white mb-4">
                        Product Catalog
                    </h2>
                    <div className="flex justify-center mb-8">
                        <svg width="100" height="20" viewBox="0 0 100 20" fill="none" className="text-secondary dark:text-blue-400">
                            <path d="M0 10 Q12.5 0 25 10 T50 10 T75 10 T100 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-4xl mx-auto">
                        <div className="relative w-full md:w-1/2">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search Product Name or CAS..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all shadow-sm"
                            />
                        </div>
                        <div className="relative w-full md:w-1/3">
                            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value as APICategory | "All")}
                                className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none appearance-none cursor-pointer shadow-sm"
                            >
                                <option value="All">All Categories</option>
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto rounded-xl shadow-xl border border-blue-100 dark:border-blue-900 bg-white dark:bg-gray-800">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-primary text-white">
                                <th className="p-4 text-sm md:text-base font-bold uppercase tracking-wider whitespace-nowrap">API Name / Molecule</th>
                                <th className="p-4 text-sm md:text-base font-bold uppercase tracking-wider whitespace-nowrap">CAS / FDF Form</th>
                                <th className="p-4 text-sm md:text-base font-bold uppercase tracking-wider whitespace-nowrap">Grade / Strength</th>
                                <th className="p-4 text-sm md:text-base font-bold uppercase tracking-wider whitespace-nowrap">Category</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-blue-50 dark:divide-gray-700">
                            {filteredData.length > 0 ? (
                                filteredData.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                                    >
                                        <td className="p-4 text-gray-800 dark:text-gray-200 font-medium">{item.col1}</td>
                                        <td className="p-4 text-gray-600 dark:text-gray-300">{item.col2}</td>
                                        <td className="p-4 text-gray-600 dark:text-gray-300">{item.col3}</td>
                                        <td className="p-4 text-sm font-semibold text-secondary dark:text-blue-400">{item.category}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="p-8 text-center text-gray-500 dark:text-gray-400">
                                        No products found matching your criteria.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
                    Showing {filteredData.length} of {apiData.length} products
                </div>
            </div>
        </section>
    );
}
