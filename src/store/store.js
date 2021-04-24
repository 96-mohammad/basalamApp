import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {    
        cart: [],        
        cartValue: [],  
        totalValue: 0, 
        isDelete: false,
        counter: 1    
    },
    actions: {
        //*** GET Data From Api ***//
        async fetchData({ commit }) {
            await axios
            .get("https://internship-cart.iran.liara.run/api/v1.0/users/6083227ac45c974c452d15d1")           
            .then((res) => commit("SET_DATA", res.data.data.cart))                            
            .catch(err => {
                if (err.res.status === 404)
                    alert('خطا: صفحه مورد نظر یافت نشد')
                else if (err.res.status === 400) 
                    alert('خطایی در جستجوی شما وجود دارد. لطفا آن را درست فرمایید')
                else if (err.request)
                    console.error(err.request)
                else console.error(err.message)        
            })
        }, 
        //*** Delete Data From Api ***//
        async deleteCart({ commit }, id) {
            await axios.patch("https://internship-cart.iran.liara.run/api/v1.0/users/6083227ac45c974c452d15d1/reject", {
                productId: id
            })
            commit('DELETE_FROM_UI', id)            
        },                
    },
    mutations: {
        SET_DATA: (state, payload) => {
            state.cart = payload
            //*** If Cart Stock === 0 => This Cart Must be Delete ***//
            state.cart = state.cart.filter(cart => cart.stock !== 0) 
        }, 
        INITIAL_VALUE: (state, payload) => {            
            state.cartValue[payload.id] = payload.price
            state.totalValue = state.cartValue.reduce((cur,total) => cur + total, 0)                      
        },
        CALC_VENDOR_VALUE: (state, payload) => {            
            state.cartValue[payload.id] = payload.total
            state.totalValue = state.cartValue.reduce((cur,total) => cur + total, 0)            
        }, 
        DELETE_FROM_UI: (state, id) => {
            state.cart = state.cart.filter(cart => cart._id !== id)
            if (state.cart.length === 0) 
                state.isDelete = true                        
            else state.isDelete = false
        },
        DELETE_PRICE: (state, payload) => {
            state.cartValue[payload] = 0 
            state.totalValue = state.cartValue.reduce((cur,total) => cur + total, 0)
        },
        GET_COUNTER: (state, payload) => state.counter = payload, 
        //*** If User Click Cart Button ***//
        JUST_CART_PRICE: (state, payload) => {
            state.totalValue = payload.price
            state.cart = state.cart.filter(cart => cart._id === payload.id)            
        }              
    },
    getters: {
        cart: state => state.cart,
        length: state => state.cart.length,        
        total: state => state.totalValue,  
        isDelete: state => state.isDelete,
        counter: state => state.counter                            
    }        
});
