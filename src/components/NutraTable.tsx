'use client';

import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';

interface NutraProduct {
    molecule: string;
    strength: string;
    dosageForm: string;
}

const nutraData: NutraProduct[] = [
    { molecule: "Vitamin D3", strength: "1,000 IU, 2,000 IU, 5,000 IU", dosageForm: "Softgels, Tablets, Liquid Drops" },
    { molecule: "Omega-3 (Fish/Krill Oil)", strength: "1,000 mg (often providing 300-500 mg EPA/DHA combined)", dosageForm: "Softgels, Liquid Oil, Emulsions" },
    { molecule: "Probiotics", strength: "1 to 100+ Billion CFU (Colony Forming Units)", dosageForm: "Capsules, Powders, Gummies, Liquids" },
    { molecule: "Collagen Peptides", strength: "10g to 20g per serving", dosageForm: "Powder, Capsules, Liquid Shots" },
    { molecule: "Curcumin (from Turmeric)", strength: "500 mg to 1,000 mg (often with Bioavailability enhancers like Piperine)", dosageForm: "Capsules, Tablets, Gummies, Powder" },
    { molecule: "Magnesium", strength: "200 mg to 400 mg (as Glycinate, Citrate, Oxide, etc.)", dosageForm: "Capsules, Tablets, Powder, Gummies" },
    { molecule: "Coenzyme Q10 (CoQ10)", strength: "100 mg, 200 mg (often as more bioavailable Ubiquinol)", dosageForm: "Softgels, Capsules, Tablets" },
    { molecule: "Melatonin", strength: "1 mg, 3 mg, 5 mg, 10 mg", dosageForm: "Tablets, Gummies, Liquid, Fast-Dissolve" },
    { molecule: "Green Tea Extract", strength: "500 mg", dosageForm: "Capsules, Tablets" },
    { molecule: "Multivitamins / Multiminerals", strength: "-", dosageForm: "Tablets, Capsules, Gummies, Powder" },
    { molecule: "Vitamin B Complex", strength: "B12: 500-1000 mcg, B6: 10-50 mg, etc.", dosageForm: "Tablets, Capsules, Liquid" },
    { molecule: "Glucosamine & Chondroitin", strength: "Glucosamine: 1,500 mg, Chondroitin: 1,200 mg", dosageForm: "Tablets, Capsules" },
    { molecule: "Ashwagandha", strength: "500 mg to 600 mg", dosageForm: "Capsules, Tablets, Powder" },
    { molecule: "Zinc", strength: "15 mg, 30 mg, 50 mg", dosageForm: "Lozenges, Capsules, Tablets" }
];

export default function NutraTable() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredData = useMemo(() => {
        return nutraData.filter(item => {
            return item.molecule.toLowerCase().includes(searchQuery.toLowerCase());
        });
    }, [searchQuery]);

    return (
        <section className="py-16 bg-white dark:bg-[#0B1121]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-primary dark:text-white mb-4">
                        Nutraceuticals Products
                    </h2>
                    <div className="flex justify-center mb-8">
                        <svg width="100" height="20" viewBox="0 0 100 20" fill="none" className="text-secondary dark:text-blue-400">
                            <path d="M0 10 Q12.5 0 25 10 T50 10 T75 10 T100 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    </div>

                    <div className="max-w-xl mx-auto">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search Nutraceutical Product..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all shadow-sm"
                            />
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto rounded-xl shadow-xl border border-blue-100 dark:border-blue-900 bg-white dark:bg-gray-800">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-primary text-white">
                                <th className="p-4 text-sm md:text-base font-bold uppercase tracking-wider whitespace-nowrap">Molecule</th>
                                <th className="p-4 text-sm md:text-base font-bold uppercase tracking-wider whitespace-nowrap">Strength</th>
                                <th className="p-4 text-sm md:text-base font-bold uppercase tracking-wider whitespace-nowrap">Dosage Form</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-blue-50 dark:divide-gray-700">
                            {filteredData.length > 0 ? (
                                filteredData.map((item, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                                    >
                                        <td className="p-4 text-gray-800 dark:text-gray-200 font-medium">{item.molecule}</td>
                                        <td className="p-4 text-gray-600 dark:text-gray-300">{item.strength}</td>
                                        <td className="p-4 text-gray-600 dark:text-gray-300">{item.dosageForm}</td>
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
                    Showing {filteredData.length} of {nutraData.length} products
                </div>
            </div>
        </section>
    );
}
