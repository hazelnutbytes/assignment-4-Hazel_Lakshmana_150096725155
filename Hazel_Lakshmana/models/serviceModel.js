const supabase = require('../config/supabase');


const getServicesBySalon = async (salonId) => {

    const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('salonId', salonId);

    if (error) {
        throw error;
    }

    return data;
};


const createService = async (service) => {

    const { data, error } = await supabase
        .from('services')
        .insert([service])
        .select()
        .single();

    if (error) {
        throw error;
    }

    return data;
};


const getServiceById = async (id) => {

    const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('id', id)
        .single();

    if (error && error.code !== 'PGRST116') {
        throw error;
    }

    return data;
};


const updateService = async (id, service) => {

    const { data, error } = await supabase
        .from('services')
        .update(service)
        .eq('id', id)
        .select()
        .single();

    if (error) {
        throw error;
    }

    return data;
};


const deleteService = async (id) => {

    const { data, error } = await supabase
        .from('services')
        .delete()
        .eq('id', id)
        .select();

    if (error) {
        throw error;
    }

    return data;
};


const getAvailableServices = async () => {

    const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('isAvailable', true);

    if (error) {
        throw error;
    }

    return data;
};


module.exports = {
    getServicesBySalon,
    createService,
    getServiceById,
    updateService,
    deleteService,
    getAvailableServices
};