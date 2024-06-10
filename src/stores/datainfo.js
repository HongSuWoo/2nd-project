import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export const useContact = defineStore("datas", () => {
    const router = useRouter();
    const blogs = ref([]);
    const detailsinfo = reactive({});
    const datainfo = reactive({
        id: "", 
        name: "", 
        phone: "", 
        group: "", 
        email: "", 
        address: "" 
    });

    const blogHandler = () => {
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(data => blogs.value = data);
    }

    const detailsHandler = (id) => {
        fetch('http://localhost:3000/users/' + id)
            .then(response => response.json())
            .then(data => detailsinfo.value = { ...data });
    }

    const modifyHandler = (datas) => {
        fetch('http://localhost:3000/users/' + datas.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: datas.id,
                name: datas.name,
                phone: datas.phone,
                group: datas.group,
                email: datas.email,
                address: datas.address
            })
        }).then(response => response.status)
            .then(result => result == 200 ? router.push("/") : alert("수정 실패"));
    }

    const datainfoHandler = (datas) => {
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: blogs.value.length + 1,
                name: datas.name,
                phone: datas.phone,
                group: datas.group,
                email: datas.email,
                address: datas.address
            })
        }).then(response => response.status)
            .then(result => result == 201 ? router.push("/") : alert("추가 실패"));
    }

    const deleteHandler = (id) => {
        fetch('http://localhost:3000/users/' + id, {
            method: "DELETE"
        }).then(response => response.status)
            .then(data => data == 200 ? router.push("/") : alert("삭제 실패"));
    }

    return { blogs, detailsinfo, datainfo, blogHandler, detailsHandler, modifyHandler, datainfoHandler, deleteHandler }
});
