import React from 'react'

const Modal = () => {
  return (
    <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                <h3 className="font-bold text-lg">Enter Patient Details</h3>
                
                <div className="modal-action flex items-start justify-center">
                <form method="dialog">
              
              <div className="form-control w-[300px]">
                <label className="label">Patient Name</label>
                <input type="text" placeholder="Enter patient name" className="input input-bordered w-full" required />
              </div>
              <div className="form-control w-[300px]">
                <label className="label">Public key</label>
                <input type="number" placeholder="Enter Patient public key" className="input input-bordered w-full" required />
              </div>
              <div className="form-control w-[300px]">
                <label className="label">Medical Checkup Report</label>
                <input type="text" placeholder="Enter medical report" className="input input-bordered w-full" required />
              </div>
              <div className="form-control mt-4 w-[300px]">
                <button type="submit" className="btn btn-primary w-full">Generate hash,Encrypt data and store on blockchain</button>
              </div>

            
            </form>
                </div>
                </div>
            </dialog>
  )
}


const Modal2 = () => {
  return (
    <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                <h3 className="font-bold text-lg">Store encrypted document on blockchain</h3>
                  <div className="flex flex-col h-[200px] items-center justify-center">
                    <i className="bx bx-upload text-[70px]"></i>

                  </div>
                
                
                <div className="modal-action flex items-start justify-center">
<button className="btn btn-primary w-full flex items-center justify-center">
  <span className="mr-2">Encrypted Doc and store on blockchain</span>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0-8l-3 3m3-3l3 3m-3-3a9 9 0 110-18 9 9 0 010 18z" />
  </svg>
</button>
                </div>
                </div>
            </dialog>
  )
}

const Modal3 = () => {
  return (
    <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                <h3 className="font-bold text-lg">Verify docs</h3>

                <div className="flex flex-col h-[200px] items-start justify-start">
                  <ul className="list-none mb-4">
                    {[4, 2, 3].map((num) => (
                      <li key={num} className="flex p-2 h-[50px] w-[300px] border border-gray-300 items-center m-4">
                        
                        <i className="bx bx-file mr-2 text-lg"></i>
                        <span>Document {num}</span>
                        <input type="checkbox" className="ml-[100px] bg-gray-400 h-[20px] w-[20px] checked:bg-gray-600" />
                      </li>
                    ))}
                    
                  </ul>
                </div>
        
                <div className="modal-action flex items-start justify-center">
                  <button className="btn btn-primary w-full flex items-center justify-center">
                    <span className="mr-2">Generate Hash and verify from blockchain</span>
                  </button>
                </div>

                </div>
            </dialog>
  )
}

const Modal5 = () => {
  return (
    <dialog id="my_modal_7" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    {/* Modal Header */}
    <h3 className="font-bold text-lg">Verify Medical Checkup Report</h3>

    {/* Document Details Section */}
    <div className="flex flex-col h-auto items-start justify-start space-y-3 mt-4">
      {/* Patient Details */}
      <div className="flex flex-col">
        <p className="font-medium">Patient Name:</p>
        <p>Muhammad Ali bin Zulkifli</p>
      </div>

      <div className="flex flex-col">
        <p className="font-medium">Document Date:</p>
        <p>12/03/2024</p>
      </div>

      <div className="flex flex-col">
        <p className="font-medium">Clinic Name:</p>
        <p>City Clinic</p>
      </div>

      {/* Blockchain Hash */}
      <div className="flex flex-col">
        <p className="font-medium">Blockchain Transaction Hash:</p>
        <p className="text-sm text-gray-500">0x123abc456def7890...</p>
        <a
          href="https://blockchainexplorer.com/tx/0x123abc456def7890"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-sm underline"
        >
          View on Blockchain Explorer
        </a>
      </div>
    </div>

    {/* Generate Hash and Compare Section */}
    <div className="flex flex-col h-auto items-start justify-start mt-4 space-y-2">
      <p className="font-medium">Generated Hash:</p>
      <input
        type="text"
        placeholder="Generated hash will appear here"
        className="input input-bordered w-full text-sm"
        readOnly
      />
      <p className="text-sm text-gray-500">
        Click the button below to generate a hash from the provided document for verification.
      </p>
    </div>

    {/* Modal Action */}
    <div className="modal-action flex items-center justify-center">
      <button className="btn btn-primary w-full flex items-center justify-center">
        <span className="mr-2">Generate Hash and Verify from Blockchain</span>
      </button>
    </div>
  </div>
</dialog>

  )
}

const Modal4 = () => {
  return (
    <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                <h3 className="font-bold text-lg">Share docs</h3>

                <div className="flex flex-col h-[200px] items-start justify-start">
                  <ul className="list-none mb-4">
                    {[4, 2, 3].map((num) => (
                      <li key={num} className="flex p-2 h-[50px] w-[300px] border border-gray-300 items-center m-4">
                        
                        <i className="bx bx-file mr-2 text-lg"></i>
                        <span>Document {num}</span>
                        <input type="checkbox" className="ml-[100px] bg-gray-400 h-[20px] w-[20px] checked:bg-gray-600" />
                      </li>
                    ))}
                    
                  </ul>
                </div>
        
                <div className="modal-action flex items-start justify-center">
                  <button className="btn btn-primary w-full flex items-center justify-center">
                    <span className="mr-2">Share</span>
                  </button>
                </div>

                </div>
            </dialog>
  )
}


const Modal6 = () => {
  return (
    <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    {/* Modal Header */}
    <h3 className="font-bold text-lg">Request Permission to Patient</h3>

    {/* Document Details Section */}
    <div className="flex flex-col h-auto items-start justify-start space-y-3 mt-4">
      {/* Patient Details */}
      <div className="flex flex-col">
        <p className="font-medium">Patient Name:</p>
        <p>Muhammad Ali bin Zulkifli</p>
      </div>

      <div className="flex flex-col">
        <p className="font-medium">Send to (patient pubkey):</p>
        <p>FNoTXGKcxF6gE8Hr</p>
      </div>

      <div className="flex flex-col">
        <p className="font-medium">Requesting Clinic (Provider pubkey):</p>
        <p>9xqNNNzSGQqR</p>
      </div>
    </div>

    {/* Permission Options */}
    <div className="flex flex-col h-auto items-start justify-start mt-4 space-y-3">
      <p className="font-medium">Permission Options:</p>
      <label className="flex items-center space-x-2">
        <input
          type="radio"
          name="permission"
          value="access"
          className="radio radio-primary"
        />
        <span>Grant permission to access data</span>
      </label>

      <label className="flex items-center space-x-2">
        <input
          type="radio"
          name="permission"
          value="share"
          className="radio radio-primary"
        />
        <span>Allow sharing data with others</span>
      </label>

      <p className="text-sm text-gray-500 mt-2">
        Choose whether to allow access only or grant the ability to share this document further.
      </p>
    </div>

    {/* Additional Notes */}
    <div className="flex flex-col h-auto items-start justify-start mt-4 space-y-2">
      <p className="font-medium">Additional Notes (Optional):</p>
      <textarea
        placeholder="Add any additional comments or conditions..."
        className="textarea textarea-bordered w-full text-sm"
      ></textarea>
    </div>

    {/* Modal Action */}
    <div className="modal-action flex items-center justify-center">
      <button className="btn btn-primary w-full flex items-center justify-center">
        <span className="mr-2">Send Permission Request</span>
      </button>
    </div>
  </div>
</dialog>

  );
}

const Modal7 = () => {
  return(
    <dialog id="patient_permission_modal" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    {/* Modal Header */}
    <h3 className="font-bold text-lg text-center">Permission Request</h3>

    {/* Request Details */}
    <div className="flex flex-col items-start mt-4 space-y-3">
      {/* Requesting Party */}
      <div className="flex flex-col">
        <p className="font-medium">Requesting Party:</p>
        <p>City Clinic : 9xqNNNzSGQqR</p>
      </div>

      {/* Document Details */}
      <div className="flex flex-col">
        <p className="font-medium">Document Title:</p>
        <p>Medical Checkup Report</p>
      </div>

      {/* Reason for Access */}
      <div className="flex flex-col">
        <p className="font-medium">Reason for Access:</p>
        <p>To verify your recent medical checkup results</p>
      </div>

      {/* Access Type */}
      <div className="flex flex-col">
        <p className="font-medium">Requested Access:</p>
        <p>View and verify document</p>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="modal-action flex flex-col space-y-3">
      {/* Grant Permission */}
      <button className="btn btn-primary w-full flex items-center justify-center">
        <span className="mr-2">Grant Permission</span>
      </button>

      {/* Deny Permission */}
      <button className="btn btn-outline w-full flex items-center justify-center">
        <span className="mr-2">Deny Request</span>
      </button>

      {/* Info Text */}
      <p className="text-sm text-gray-500 text-center">
        By granting permission, you allow the clinic to access this document for verification purposes. You can revoke access anytime.
      </p>
    </div>
  </div>
</dialog>

  )
}


export {Modal2,Modal,Modal3,Modal4,Modal5,Modal6,Modal7}

