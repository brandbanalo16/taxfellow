import servicesData from '@/data/services-data.json';
import SubCategoryPage from '@/components/service-pages/SubCategoryPage';

export const metadata = {
    title: 'Business Incorporation Services | Taxfello',
    description: 'Private Limited, LLP, OPC, Partnership, and all company incorporation services. Expert CA/CS team, 7-10 day turnaround, 100% online process.',
    keywords: ['business incorporation', 'private limited company registration', 'LLP registration', 'OPC registration', 'company registration India']
};

export default function BusinessIncorporationPage() {
    const subData = servicesData.subServices.find(s => s.id === 'business-incorporation');
    const parentData = servicesData.mainServices.find(s => s.id === 'registration');
    return <SubCategoryPage subData={subData} parentData={parentData} />;
}
