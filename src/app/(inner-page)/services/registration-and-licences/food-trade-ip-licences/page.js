import servicesData from '@/data/services-data.json';
import SubCategoryPage from '@/components/service-pages/SubCategoryPage';

export const metadata = {
    title: 'Food, Trade & IP Licences | Taxfello',
    description: 'FSSAI registration, trademark, IEC, MSME, ISO, barcode, trade licence, and IP protection services. Complete licencing support for food businesses and brands.',
    keywords: ['FSSAI registration', 'trademark registration', 'IEC registration', 'MSME registration', 'ISO certification', 'food licence', 'trade licence']
};

export default function FoodTradeIPPage() {
    const subData = servicesData.subServices.find(s => s.id === 'food-trade-ip-licences');
    const parentData = servicesData.mainServices.find(s => s.id === 'registration');
    return <SubCategoryPage subData={subData} parentData={parentData} />;
}
