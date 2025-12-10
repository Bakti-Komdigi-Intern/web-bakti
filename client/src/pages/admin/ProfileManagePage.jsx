import { useEffect, useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { profileService } from '../../services/profileService';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ProfileManagePage = () => {
  const [formData, setFormData] = useState({
    sejarah: '',
    visi_misi: '',
    struktur_organisasi: '',
    kontak: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await profileService.getProfile();
      if (response.success) {
        setFormData({
          sejarah: response.data.sejarah || '',
          visi_misi: response.data.visi_misi || '',
          struktur_organisasi: response.data.struktur_organisasi || '',
          kontak: response.data.kontak || ''
        });
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await profileService.updateProfile(formData);
      alert('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link'],
      ['clean']
    ]
  };

  return (
    <AdminLayout>
      <div>
        <h1 className="text-2xl font-bold mb-6 dark:text-white">Profile Management</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Sejarah */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <label className="block text-lg font-semibold mb-4">Sejarah (History)</label>
            <ReactQuill
              value={formData.sejarah}
              onChange={(value) => setFormData({ ...formData, sejarah: value })}
              modules={quillModules}
              className="bg-white"
            />
          </div>

          {/* Visi Misi */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <label className="block text-lg font-semibold mb-4">Visi & Misi (Vision & Mission)</label>
            <ReactQuill
              value={formData.visi_misi}
              onChange={(value) => setFormData({ ...formData, visi_misi: value })}
              modules={quillModules}
              className="bg-white"
            />
          </div>

          {/* Struktur Organisasi */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <label className="block text-lg font-semibold mb-4">Struktur Organisasi (Organization Structure)</label>
            <ReactQuill
              value={formData.struktur_organisasi}
              onChange={(value) => setFormData({ ...formData, struktur_organisasi: value })}
              modules={quillModules}
              className="bg-white"
            />
          </div>

          {/* Kontak */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <label className="block text-lg font-semibold mb-4">Kontak (Contact)</label>
            <ReactQuill
              value={formData.kontak}
              onChange={(value) => setFormData({ ...formData, kontak: value })}
              modules={quillModules}
              className="bg-white"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 text-lg font-semibold"
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default ProfileManagePage;