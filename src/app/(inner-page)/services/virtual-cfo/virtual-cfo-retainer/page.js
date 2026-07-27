import servicesData from '@/data/services-data.json';
import SubCategoryPage from '@/components/service-pages/SubCategoryPage';

export const metadata = {
    title: 'Virtual CFO Retainer Services | Taxfello',
    description: 'Monthly Virtual CFO retainer with finance function setup, management review meetings and complete CFO support. Full CFO coverage at a fraction of the full-time cost.',
    keywords: ['virtual CFO retainer', 'CFO monthly retainer', 'finance function setup', 'management review', 'outsourced CFO India']
};

export default function VirtualCFORetainerPage() {
    const subData = servicesData.subServices.find(s => s.id === 'virtual-cfo-retainer');
    const parentData = servicesData.mainServices.find(s => s.id === 'cfo');
    return <SubCategoryPage subData={subData} parentData={parentData} />;
}
