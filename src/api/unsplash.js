import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
		Authorization: 'Client-ID f27b5e5ceda9d82fcc04ecd335ee4e55bebbf2c1e09c9581fa641a3a3da6cfb5'
	}
});