import servicesData from '@/data/services-data.json';
import SubCategoryPage from '@/components/service-pages/SubCategoryPage';

export const metadata = {
    title: 'State & Labour Registrations | Taxfello',
    description: 'Professional Tax registration and Shop & Establishment registration services across all states. Complete state-level compliance from day one.',
    keywords: ['professional tax registration', 'shop establishment registration', 'state registration', 'labour compliance', 'PT registration']
};

export default function StateLabourPage() {
    const subData = servicesData.subServices.find(s => s.id === 'state-labour-registrations');
    const parentData = servicesData.mainServices.find(s => s.id === 'registration');
    return <SubCategoryPage subData={subData} parentData={parentData} />;
}
