import servicesData from '@/data/services-data.json';
import SubCategoryPage from '@/components/service-pages/SubCategoryPage';

export const metadata = {
    title: 'Legal & Corporate Drafting Services | Taxfello',
    description: 'Founder agreements, LLP agreements, NDAs, service agreements, legal notices, board resolutions, and FEMA compliance. Professional legal drafting by qualified lawyers.',
    keywords: ['legal drafting', 'founder agreement', 'NDA drafting', 'service agreement', 'board resolution', 'legal notice drafting']
};

export default function LegalCorporateDraftingPage() {
    const subData = servicesData.subServices.find(s => s.id === 'legal-corporate-drafting');
    const parentData = servicesData.mainServices.find(s => s.id === 'compliances');
    return <SubCategoryPage subData={subData} parentData={parentData} />;
}
