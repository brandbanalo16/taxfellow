import servicesData from '@/data/services-data.json';
import SubCategoryPage from '@/components/service-pages/SubCategoryPage';

export const metadata = {
    title: 'Fundraising & Investor Support | Taxfello Virtual CFO',
    description: 'Investor deck financial support, loan proposals, bank presentations, DSCR review and banking covenant tracking. Win investor and banker confidence.',
    keywords: ['fundraising support', 'investor deck', 'loan proposal', 'DSCR review', 'bank presentation', 'startup fundraising']
};

export default function FundraisingInvestorPage() {
    const subData = servicesData.subServices.find(s => s.id === 'fundraising-investor-support');
    const parentData = servicesData.mainServices.find(s => s.id === 'cfo');
    return <SubCategoryPage subData={subData} parentData={parentData} />;
}
