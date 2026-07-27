import servicesData from '@/data/services-data.json';
import SubCategoryPage from '@/components/service-pages/SubCategoryPage';

export const metadata = {
    title: 'NGO & Charitable Trust Registration | Taxfello',
    description: 'NGO Darpan, 12A & 80G registration, FCRA, CSR-1 and complete NGO annual compliance. Empower your mission with the right legal structure.',
    keywords: ['NGO registration', '12A 80G registration', 'FCRA registration', 'CSR-1 registration', 'NGO Darpan', 'charitable trust registration']
};

export default function NGOCharitableTrustPage() {
    const subData = servicesData.subServices.find(s => s.id === 'ngo-charitable-trust');
    const parentData = servicesData.mainServices.find(s => s.id === 'registration');
    return <SubCategoryPage subData={subData} parentData={parentData} />;
}
