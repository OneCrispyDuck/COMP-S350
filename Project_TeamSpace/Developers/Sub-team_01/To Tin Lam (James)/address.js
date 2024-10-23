import React, { useState } from 'react';
import { Pencil, X, Trash2, Plus } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';

const AddressManagement = () => {
  const [addresses, setAddresses] = useState([
    {
      address: '30 Good Shepherd Street, Ho Man Tin, Kowloon, Hong Kong',
      deliveryTips: ''
    }
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({
    address: '',
    deliveryTips: ''
  });
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleEdit = (index) => {
    setFormData({
      address: addresses[index].address,
      deliveryTips: addresses[index].deliveryTips
    });
    setEditingIndex(index);
    setIsEditing(true);
  };

  const handleSave = () => {
    if (isEditing) {
      const newAddresses = [...addresses];
      newAddresses[editingIndex] = {
        address: formData.address,
        deliveryTips: formData.deliveryTips
      };
      setAddresses(newAddresses);
    } else if (isAdding) {
      setAddresses([...addresses, {
        address: formData.address,
        deliveryTips: formData.deliveryTips
      }]);
    }
    setIsEditing(false);
    setIsAdding(false);
    setEditingIndex(null);
    setFormData({ address: '', deliveryTips: '' });
  };

  const handleDelete = (index) => {
    setDeleteIndex(index);
    setShowDeleteAlert(true);
  };

  const confirmDelete = () => {
    const newAddresses = addresses.filter((_, index) => index !== deleteIndex);
    setAddresses(newAddresses);
    setShowDeleteAlert(false);
    setDeleteIndex(null);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setIsAdding(false);
    setShowDeleteAlert(false);
    setEditingIndex(null);
    setFormData({ address: '', deliveryTips: '' });
  };

  const handleAddNew = () => {
    setFormData({ address: '', deliveryTips: '' });
    setIsAdding(true);
  };

  const AddressForm = ({ title }) => (
    <Card className="mb-4">
      <CardContent className="pt-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={handleCancel}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              value={formData.address}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                address: e.target.value
              }))}
              className="w-full p-2 border rounded-md"
              rows={3}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Delivery Tips
            </label>
            <input
              type="text"
              value={formData.deliveryTips}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                deliveryTips: e.target.value
              }))}
              placeholder="E.g., Please call when you arrive"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <button
            onClick={handleSave}
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
          >
            Save & Continue
          </button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      {!isEditing && !isAdding ? (
        <>
          {addresses.map((addressItem, index) => (
            <Card key={index} className="mb-4">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Delivery Address {index + 1}</h3>
                    <p className="text-gray-600">{addressItem.address}</p>
                    {addressItem.deliveryTips && (
                      <p className="text-sm text-gray-500 mt-2">
                        Delivery Tips: {addressItem.deliveryTips}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <Pencil className="h-5 w-5 text-gray-600" />
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <Trash2 className="h-5 w-5 text-red-500" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          <button
            onClick={handleAddNew}
            className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Plus className="h-5 w-5" />
            Add New Address
          </button>
        </>
      ) : isEditing ? (
        <AddressForm title={`Edit Address ${editingIndex + 1}`} />
      ) : (
        <AddressForm title="Add New Address" />
      )}

      {showDeleteAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <Alert className="max-w-md bg-white">
            <AlertTitle className="text-lg font-semibold mb-2">
              Delete Address
            </AlertTitle>
            <AlertDescription className="mb-4">
              Are you sure you want to delete this address? This action cannot be undone.
            </AlertDescription>
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleCancel}
                className="px-4 py-2 border rounded-md hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </Alert>
        </div>
      )}
    </div>
  );
};

export default AddressManagement;