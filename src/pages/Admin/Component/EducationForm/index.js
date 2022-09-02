import React from 'react'

const EducationForm = ({ data }) => {
    let { editEducationForm, setEditEducationForm } = data;
  
    let handleInputChange = (e) => {
      let key = e.target.name;
      let value = e.target.value;
      setEditEducationForm({ ...editEducationForm, [key]: value });
    };
  
    return (
      <div className="modal fade" id="modalEducationForm">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Data</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  className="form-control mb-3"
                  name="place"
                  onChange={handleInputChange}
                  value={editEducationForm.place}
                  placeholder="PLACE"
                  style={{ color: "white" }}
                />
  
                <div className="mb-3">
                  <input
                    type="date"
                    name="start_date"
                    onChange={handleInputChange}
                    value={editEducationForm.start_date}
                    min="2018-01-01"
                    max="2040-12-12"
                    style={{ padding: "10px 9px" }}
                  />
                  <span className="fw-bolder mx-2">---</span>
                  <input
                    type="date"
                    name="end_date"
                    onChange={handleInputChange}
                    value={editEducationForm.end_date}
                    min="2018-01-01"
                    max="2040-12-12"
                    style={{ padding: "10px 9px" }}
                  />
                </div>
  
                <input
                  type="text"
                  className="form-control mb-3"
                  name="position"
                  onChange={handleInputChange}
                  value={editEducationForm.position}
                  placeholder="POSITION"
                  style={{ color: "white" }}
                />
  
                <textarea
                  className="form-control mb-3"
                  style={{ height: "20vh" }}
                  name="desc"
                  onChange={handleInputChange}
                  value={editEducationForm.desc}
                  placeholder="DESCRIPTION"
                  rows="6"
                ></textarea>
  
                <textarea
                  className="form-control mb-3"
                  style={{ height: "20vh" }}
                  name="more_desc"
                  onChange={handleInputChange}
                  value={editEducationForm.more_desc}
                  placeholder="MORE DESCRIPTION"
                  rows="6"
                ></textarea>
  
                <textarea
                  className="form-control mb-3"
                  style={{ height: "15vh" }}
                  name="cert_url"
                  onChange={handleInputChange}
                  value={editEducationForm.cert_url}
                  placeholder="URL CERT"
                  rows="3"
                ></textarea>
  
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={async () => {
                    let response = await updateEducation(editEducationForm);
                    if (response)
                      document.getElementById("modalEducationForm").click();
                    else return 1;
                  }}
                >
                  Approve
                </button>
                <button
                  type="button"
                  className="btn btn-danger display-inline"
                  onClick={async () => {
                    let reply = window.confirm(
                      "Are you sure you want to delete this data?"
                    );
                    if (reply) deleteEducation(editEducationForm.id);
                    document.getElementById("modalEducationForm").click();
                  }}
                >
                  Delete
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default EducationForm