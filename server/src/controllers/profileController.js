import * as profileModel from '../models/profileModel.js';

export const getProfile = async (req, res) => {
  try {
    const profile = await profileModel.getProfile();
    
    if (!profile) {
      return res.status(404).json({ 
        success: false, 
        message: 'Profile not found' 
      });
    }

    res.json({ success: true, data: profile });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { sejarah, visi_misi, struktur_organisasi, kontak } = req.body;

    await profileModel.updateProfile(
      sejarah || '',
      visi_misi || '',
      struktur_organisasi || '',
      kontak || ''
    );

    res.json({ success: true, message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};