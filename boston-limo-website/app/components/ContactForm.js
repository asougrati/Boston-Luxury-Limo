export const ContactForm = () => {

    return (
        <form className="grid grid-cols-2 gap-6 text-black">
            <input type="text" name="name" placeholder="Name" className="p-2 border-2 border-gray-300 rounded-md col-span-1" required />
            <input type="text" name="phone" placeholder="Phone Number" className="p-2 border-2 border-gray-300 rounded-md col-span-1" required />
            <input type="email" name="email" placeholder="Email" className="p-2 border-2 border-gray-300 rounded-md col-span-2" required />
            <textarea name="message" placeholder="Message" className="p-2 border-2 border-gray-300 rounded-md h-32 col-span-2" required></textarea>
            <button type="submit" className="col-span-2 self-center bg-yellow-300 rounded-full text-black py-3 px-9 font-lora lg:text-lg  md:text-sm text-xs font-semibold hover:bg-yellow-400">Submit</button>
        </form>
    )
}