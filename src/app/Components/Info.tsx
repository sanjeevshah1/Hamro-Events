const Info = ({name, email, phone, location}:{name:string, email?:string, phone?:string, location?:string}) => {
    const display = name !=="Admin" && (email ||  phone || location)
    return (
    <div>
        <div className="m-4 p-4 flex flex-col items-center">
            <img src="avatar.png" alt="Image of User." />
            <p className="font-bold text-[1.5rem] text-center text-white">{name}</p>
          </div>
          {display && <div className="flex flex-col items-start p-4 m-4">
            <p className="text-[1.5rem] text-center">Email: {email}</p>
            <p className="text-[1.5rem] text-center">Phone: {phone}</p>
            <p className="text-[1.5rem] text-center">Location: {location}</p>
        </div>}
    </div>
  )
}

export default Info
