<template>
    <div class="container">
        <div class="row">
           <div class="col-3">    
                <form @submit="upload" enctype="multipart/form-data">
                    <label class="form-label" for="name">Nombre:</label>
                    <input type="text" class="form-control" v-model="form.name" id="name" required>
                    <label class="form-label" for="value">Valor:</label>
                    <input type="number" class="form-control" v-model="form.value" id="value" required>
                     <label class="form-label" for="img">Image:</label>
                    <input type="file" class="form-control" @change="onFileChange" accept=".png, .jpg, .jpeg" required>
                    <input type="submit" class="btn btn-success mt-2" value="Agregar">
                </form>
            </div>    
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            name: '',
            value: 0,
            image: ''
        }
    },
    methods:{
        upload(){
            let formData = new formData()
            formData.append('name', this.name)
            formData.append('value', this.value)
            formData.append('status', true)
            formData.append('image', this.image)
            axios.post('http://localhost:3000/', formData,{
                headers: {'Access-Control-Allow-Methods': 'POST'}
            })
            .then((response)=>{
                console.log(response)
                this.$router.push('/')
            })
        },
        onFileChange(e){
            let files = e.target.files || e.dataTransfer.files
            if (!files.length) return;
            this.image = files[0]
            console.log(this.image);
        }
    }
}
</script>