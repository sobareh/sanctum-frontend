import Dashboard from '../layout/Dashboard';
import { useState, useEffect } from 'react';

const UpdateData = () => {
  const [form, setForm] = useState({
    nomor_dokumen: '',
    nominal: 0,
    target_assign: '',
    tanggal_dokumen: '',
    jenis_dokumen: '',
    file_name: '',
  });
  const [disabled, setDisabled] = useState(false);
  const [prodHukumAwal, setProdHukumAwal] = useState(false);
  const [prodSkpkpp, setProdSkpkpp] = useState(false);

  const handleChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (form?.target_assign === '2') {
      setDisabled(false);
      setProdHukumAwal(true);
      setProdSkpkpp(false);
    } else if (form?.target_assign === '5') {
      setDisabled(false);
      setProdSkpkpp(true);
      setProdHukumAwal(false);
    } else {
      setDisabled(true);
      setProdHukumAwal(false);
      setProdSkpkpp(false);
      setForm({ ...form, jenis_dokumen: '' });
    }
  }, [form.target_assign]);

  return (
    <Dashboard
      headerTitle='Update Data Restitusi'
      headerDesc='untuk memperbarui data Restitusi'
    >
      <div className='row mb-5 gy-5 gx-xl-10'>
        <div className='col-7'>
          <div className='card card-xl-stretch mb-xl-10'>
            <div className='card-body mt-10 pt-5'>
              <form className='form' onSubmit={onSubmit}>
                <div className=' text-center'>
                  <div className='text-muted fw-bold mb-5 fs-5'>
                    Silahkan update data, via form ini.
                  </div>
                </div>
                <div className='d-flex flex-column mb-8 fv-row'>
                  <label className='d-flex align-items-center fs-6 fw-bold mb-2'>
                    <span className='required'>Nomor Dokumen</span>
                    <i
                      className='fas fa-exclamation-circle ms-2 fs-7'
                      data-bs-toggle='tooltip'
                      title='Specify a target name for future usage and reference'
                    />
                  </label>
                  <input
                    type='text'
                    className='form-control form-control-solid'
                    placeholder='Masukkan nomor dokumen'
                    name='nomor_dokumen'
                    onChange={handleChange}
                  />
                </div>
                <div className='d-flex flex-column mb-8 fv-row'>
                  <label className='d-flex align-items-center fs-6 fw-bold mb-2'>
                    <span className='required'>Nominal</span>
                    <i
                      className='fas fa-exclamation-circle ms-2 fs-7'
                      data-bs-toggle='tooltip'
                    />
                  </label>
                  <input
                    type='number'
                    className='form-control form-control-solid'
                    placeholder='Masukkan nominal angka yang ada pada dokumen'
                    name='nominal'
                    onChange={handleChange}
                  />
                </div>
                <div className='row g-9 mb-8'>
                  <div className='col-md-6 fv-row'>
                    <label className='required fs-6 fw-bold mb-2'>Assign</label>
                    <select
                      onChange={handleChange}
                      className='form-select form-select-solid'
                      data-control='select2'
                      data-hide-search='true'
                      data-placeholder='Select a Team Member'
                      name='target_assign'
                    >
                      <option value=''>Pilih update...</option>
                      <option value={1}>SPTLB</option>
                      <option value={2}>
                        PLB, SKPPKP, SKPLB, Keberatan, Banding
                      </option>
                      <option value={3}>ND Permintaan Rekening</option>
                      <option value={4}>Balasan ND Permintaan Rekening</option>
                      <option value={5}>SKPKPP</option>
                      <option value={6}>SPMKP</option>
                      <option value={7}>SP2D</option>
                    </select>
                  </div>
                  <div className='col-md-6 fv-row'>
                    <label
                      className='required fs-6 fw-bold mb-2'
                      htmlFor='input-date'
                    >
                      Tanggal Dokumen
                    </label>
                    <div className='position-relative d-flex align-items-center'>
                      <span
                        htmlFor='input-date'
                        className='svg-icon svg-icon-2 position-absolute mx-4'
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                        >
                          <path
                            opacity='0.3'
                            d='M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z'
                            fill='black'
                          />
                          <path
                            d='M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z'
                            fill='black'
                          />
                          <path
                            d='M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z'
                            fill='black'
                          />
                        </svg>
                      </span>
                      <input
                        onChange={handleChange}
                        id='tanggal-bps'
                        type='date'
                        class='form-control form-control-solid ps-12'
                        placeholder='Select a date'
                        name='tanggal_dokumen'
                      />
                    </div>
                  </div>
                </div>
                <div className='mb-8 fv-row'>
                  <div
                    className={`d-flex flex-stack ${disabled && 'text-muted'}`}
                  >
                    <div className='fw-bold me-5'>
                      <label className='fs-6'>Jenis Dokumen</label>
                      <div className='fs-7 text-muted'>
                        Pilih sesuai jenis dokumen
                      </div>
                    </div>
                    {prodSkpkpp && (
                      <div className='d-flex align-items-center'>
                        <label className='form-check form-check-custom form-check-solid me-2'>
                          <input
                            className='form-check-input h-20px w-20px'
                            type='radio'
                            onChange={handleChange}
                            name='jenis_dokumen'
                            value='SKPKPP-REK'
                            disabled={disabled}
                          />
                          <span className='form-check-label fw-bold'>
                            SKPKPP Dengan Rekening
                          </span>
                        </label>
                        <label className='form-check form-check-custom form-check-solid me-2'>
                          <input
                            className='form-check-input h-20px w-20px'
                            type='radio'
                            name='jenis_dokumen'
                            value='SKPKPP-NONREK'
                            onChange={handleChange}
                            disabled={disabled}
                          />
                          <span className='form-check-label fw-bold'>
                            SKPKPP Tanpa Rekening
                          </span>
                        </label>
                      </div>
                    )}
                    {prodHukumAwal && (
                      <div className='d-flex align-items-center'>
                        <label className='form-check form-check-custom form-check-solid me-2'>
                          <input
                            className='form-check-input h-20px w-20px'
                            type='radio'
                            onChange={handleChange}
                            name='jenis_dokumen'
                            value='SKPPKP'
                            disabled={disabled}
                          />
                          <span className='form-check-label fw-bold'>
                            SKPPKP
                          </span>
                        </label>
                        <label className='form-check form-check-custom form-check-solid me-2'>
                          <input
                            className='form-check-input h-20px w-20px'
                            type='radio'
                            name='jenis_dokumen'
                            value='SKPLB'
                            onChange={handleChange}
                            disabled={disabled}
                          />
                          <span className='form-check-label fw-bold'>
                            SKPLB
                          </span>
                        </label>
                        <label className='form-check form-check-custom form-check-solid me-2'>
                          <input
                            className='form-check-input h-20px w-20px'
                            type='radio'
                            name='jenis_dokumen'
                            value='PLB'
                            onChange={handleChange}
                            disabled={disabled}
                          />
                          <span className='form-check-label fw-bold'>PLB</span>
                        </label>
                        <label className='form-check form-check-custom form-check-solid'>
                          <input
                            className='form-check-input h-20px w-20px'
                            type='radio'
                            name='jenis_dokumen'
                            value='Keberatan'
                            onChange={handleChange}
                            disabled={disabled}
                          />
                          <span className='form-check-label fw-bold'>
                            Keberatan
                          </span>
                        </label>
                      </div>
                    )}
                  </div>
                </div>
                <div className='d-flex flex-column mb-8 fv-row'>
                  <label className='d-flex align-items-center fs-6 fw-bold mb-2'>
                    <span className='required'>File Scan</span>
                  </label>
                  <input
                    type='file'
                    className='form-control form-control-solid form-control-sm text-muted'
                    name='file_name'
                    id='file-upload'
                    onChange={handleChange}
                  />
                </div>
                <div className='text-center'>
                  <button
                    type='reset'
                    id='kt_modal_new_target_cancel'
                    className='btn btn-light me-3'
                  >
                    Cancel
                  </button>
                  <button
                    type='submit'
                    id='kt_modal_new_target_submit'
                    className='btn btn-primary'
                  >
                    <span className='indicator-label'>Submit</span>
                    <span className='indicator-progress'>
                      Please wait...
                      <span className='spinner-border spinner-border-sm align-middle ms-2' />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default UpdateData;
