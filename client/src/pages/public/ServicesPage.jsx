import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { servicesService } from '../../services/servicesService';
import { X } from 'lucide-react';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await servicesService.getServices();
      if (response.success) {
        setServices(response.data);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold dark:text-white text-center mb-4">Our Services</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            We provide comprehensive solutions to meet your digital infrastructure needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {service.icon && (
                  <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4 mx-auto" />
                )}
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-justify">
                  {service.description.substring(0, 160)}...
                </p>
                {/* <button className="text-primary hover:underline font-medium">
                  Learn more →
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-bold">{selectedService.title}</h2>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              {selectedService.icon && (
                <img src={selectedService.icon} alt={selectedService.title} className="w-24 h-24 mb-4" />
              )}
              <p className="text-gray-700 whitespace-pre-line">{selectedService.description}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ServicesPage;