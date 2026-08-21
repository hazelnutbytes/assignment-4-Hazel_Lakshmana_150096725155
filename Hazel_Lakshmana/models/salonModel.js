const supabase = require('../config/supabase');

const getAllSalons = async () => {

    const { data, error } = await supabase
        .from('salons')
        .select('*');

    if (error) {
        throw error;
    }

    return data;
};


const getSalonById = async (id) => {

    const { data, error } = await supabase
        .from('salons')
        .select('*')
        .eq('id', id)
        .single();

    if (error && error.code !== 'PGRST116') {
        throw error;
    }

    return data;
};


const createSalon = async (salon) => {

    const { data, error } = await supabase
        .from('salons')
        .insert([salon])
        .select()
        .single();

    if (error) {
        throw error;
    }

    return data;
};


const updateSalon = async (id, salon) => {

    const { data, error } = await supabase
        .from('salons')
        .update(salon)
        .eq('id', id)
        .select()
        .single();

    if (error) {
        throw error;
    }

    return data;
};


const deleteSalon = async (id) => {

    const { data, error } = await supabase
        .from('salons')
        .delete()
        .eq('id', id)
        .select();

    if (error) {
        throw error;
    }

    return data;
};


const getTopSalons = async () => {

    const { data, error } = await supabase
        .from('salons')
        .select('*')
        .order('rating', { ascending: false })
        .limit(5);

    if (error) {
        throw error;
    }

    return data;
};


const getSalonsByCity = async (city) => {

    const { data, error } = await supabase
        .from('salons')
        .select('*')
        .ilike('city', city);

    if (error) {
        throw error;
    }

    return data;
};


module.exports = {
    getAllSalons,
    getSalonById,
    createSalon,
    updateSalon,
    deleteSalon,
    getTopSalons,
    getSalonsByCity
};