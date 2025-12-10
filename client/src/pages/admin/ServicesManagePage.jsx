import { useEffect, useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { servicesService } from '../../services/servicesService';
import { Plus, Edit, Trash2, X } from 'lucide-react';

const ServicesManagePage = () => {
  const [services, setServices] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [formData, setFormData] = useState({ title: '', description: '' });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const handleOpenModal = (service = null) => {
    if (service) {
      setEditingService(service);
      setFormData({ title: service.title, description: service.description });
    } else {
      setEditingService(null);
      setFormData({ title: '', description: '' });
    }
    setFile(null);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingService(null);
    setFormData({ title: '', description: '' });
    setFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('description', formData.description);
      if (file) {
        data.append('icon', file);
      }

      if (editingService) {
        await servicesService.updateService(editingService.id, data);
      } else {
        await servicesService.createService(data);
      }

      fetchServices();
      handleCloseModal();
      alert(editingService ? 'Service updated' : 'Service created');
    } catch (error) {
      console.error('Error saving service:', error);
      alert('Failed to save service');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this service?')) return;

    try {
      await servicesService.deleteService(id);
      fetchServices();
      alert('Service deleted');
    } catch (error) {
      console.error('Error deleting service:', error);
      alert('Failed to delete service');
    }
  };

  return (
    <AdminLayout>
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold dark:text-white">Services Management</h1>
          <button
            onClick={() => handleOpenModal()}
            className="flex items-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            <Plus className="mr-2" size={20} />
            Add Service
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md p-6">
              {service.icon && (
                <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4" />
              )}
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description.substring(0, 100)}...</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleOpenModal(service)}
                  className="flex items-center px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  <Edit size={16} className="mr-1" /> Edit
                </button>
                <button
                  onClick={() => handleDelete(service.id)}
                  className="flex items-center px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  <Trash2 size={16} className="mr-1" /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-xl font-bold">{editingService ? 'Edit Service' : 'Add Service'}</h2>
                <button onClick={handleCloseModal}>
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg"
                    rows={5}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Icon</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="px-6 py-2 border rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2 bg-primary text-white rounded-lg disabled:opacity-50"
                  >
                    {loading ? 'Saving...' : 'Save'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default ServicesManagePage;