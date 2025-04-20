import { create } from "zustand";

const useLikeStore = create((set, get) => ({
    likedItems: JSON.parse(localStorage.getItem('likedItems')) || [],

    toggleLike: (item) => {
        const { likedItems } = get();
        const isAlreadyLiked = likedItems.find(i => i.id === item.id);

        let updateLikes;

        if (isAlreadyLiked) {
            updateLikes = likedItems.filter(i => i.id != item.id);
        } else {
            updateLikes = [...likedItems, item]

        }
        localStorage.setItem('likedItems', JSON.stringify(updateLikes));
        set({ likedItems: updateLikes });
    }
}))

export { useLikeStore };