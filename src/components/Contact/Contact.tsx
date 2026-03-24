import React, { useState, useRef } from "react";
import { validateField } from "./validateField";
import styles from "./Contact.module.css";
import PrivacyModal from "./PrivacyModal";

function Contact() {

    interface IFormErrors {
        nameError?: string;
        telError?: string;
        contentError?: string;
        agreeError?: string;
    }

    const [formErrors, setFormErrors] = useState<IFormErrors>({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const requiredInputs = useRef<(HTMLInputElement | HTMLTextAreaElement)[]>([]);
    const formElement = useRef<HTMLFormElement>(null);

    // onChange에 등록할 이벤트 핸들러
    const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
        const eventTarget = e.target;

        if(isSubmit && (eventTarget instanceof HTMLInputElement || eventTarget instanceof HTMLTextAreaElement)) {
            const input = eventTarget;

            setFormErrors((prev) => {
                return {
                    ...prev,
                    [`${input.name}Error`]: validateField(input)
                }
            });
        }
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        const inputs = requiredInputs.current;
        let newErrors: Record<string, (string | null)> = {};
        // let firstErrorField: HTMLInputElement | HTMLTextAreaElement | null = null;
        
        e.preventDefault();
        setIsSubmit(true);

        inputs.map(input => {
            const errorMessage: string | null = validateField(input)
            newErrors[`${input.name}Error`] = errorMessage;

            // if((!firstErrorField && !errorMessage)) {
            //     firstErrorField = input;
            // }
        }); 

        const hasError = Object.values(newErrors).some(error => error);

        if(!hasError && formElement.current) {
            formElement.current.submit();
        } else {
            setFormErrors((prev) => {
                return {
                    ...prev,
                    ...newErrors
                }
            });
        }
    }

    return (
        <>
            <section className={`section bg-[#054095] ${styles.section}`} data-component="contact">
                <div className="content-wrapper">
                    <h2 className="sec-title" data-aos="fade-up" data-aos-delay="300" data-aos-offset="200">
                        <span className="font-extrabold">궁금한 점</span>이 있으신가요?
                    </h2>

                    {/* ---------- Form ---------- */}
                    <form className={`w-full desktop:max-w-900 p-40 flex flex-col gap-md ${styles.form}`} noValidate onChange={handleChange} onSubmit={handleSubmit} ref={(el) => {if (el) formElement.current = el;}}  data-aos="fade-up" data-aos-delay="400" data-aos-offset="200">

                        {/* ---------- User Info (Name, Tel) ---------- */}
                        <fieldset className="flex flex-col laptop:flex-row gap-md">
                            <legend className="sr-only">사용자 정보</legend>
                            <div className={`flex-1 ${styles.formField}`}>
                                <label htmlFor="name" className={styles.label}>
                                    이름 <span className={styles.essential}>*</span>
                                </label>
                                <input type="text" className={styles.input} id="name" name="name" placeholder="이름을 입력하세요" data-action="입력" required aria-required="true" 
                                ref={(el) => {if (el) requiredInputs.current[0] = el;}}/>
                                <p className={styles.errorMessage}>{formErrors.nameError}</p>
                            </div>
                            <div className={`flex-1 ${styles.formField}`}>
                                <label htmlFor="tel" className={styles.label}>
                                    연락처 <span className={styles.essential}>*</span>
                                </label>
                                <input type="tel" className={styles.input} id="tel" name="tel" placeholder="연락처를 입력하세요 (숫자만)" inputMode="numeric" pattern="^[0-9]{9,11}$" data-action="입력" data-format="연락처" required aria-required="true"
                                ref={(el) => {if (el) requiredInputs.current[1] = el;}}/>
                                <p className={styles.errorMessage}>{formErrors.telError}</p>
                            </div>
                        </fieldset>

                        {/* ---------- Extra Info (Car, Content) ---------- */}
                        <div className={styles.formField}>
                            <label htmlFor="car-info" className={styles.label}>희망 차종</label>
                            <input type="text" className={styles.input} id="car-info" placeholder="희망 차종을 입력하세요"/>
                        </div>
                        <div className={styles.formField}>
                            <label htmlFor="content" className={styles.label}>
                                문의 내용 <span className={styles.essential}>*</span>
                            </label>
                            <textarea className={`h-250 laptop:h-200 ${styles.input}`} id="content" name="content" placeholder="문의 내용을 입력하세요" data-action="입력" required aria-required="true" ref={(el) => {if (el) requiredInputs.current[2] = el;}}></textarea>
                            <p className={styles.errorMessage}>{formErrors.contentError}</p>
                        </div>
                        
                        {/* ---------- Policy & Submit ---------- */}
                        <div className="w-full mt-20 flex justify-between items-center relative">
                            <p className={`py-xs absolute top-0 left-0 -translate-y-full ${styles.formGuide}`}>
                                <span className={styles.essential}>*</span>는 필수 입력 항목입니다
                            </p>
                            <label className="flex items-center gap-5 cursor-pointer">
                                <input type="checkbox" name="agree" className={`sr-only ${styles.checkbox}`} data-action="동의" required aria-required="true" 
                                ref={(el) => {if (el) requiredInputs.current[3] = el;}}/>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={`size-14 laptop:size-20 ${styles.customCheckbox}`}>
                                    <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                </svg>
                                <span className={styles.agreeLabel}>[필수] 개인정보 수집 및 이용 동의</span>
                            </label>
                            <button type="button" className={`h-44 px-xs ${styles.agreementButton}`} onClick={() => setIsOpen(true)}>전문 보기</button>
                            <p className={styles.errorMessage}>{formErrors.agreeError}</p>
                        </div>
                        <button type="submit" className={`w-full py-12 laptop:py-15 mt-md ${styles.button}`}>문의하기</button>
                    </form>
                </div>
            </section>
            {isOpen && <PrivacyModal onClose={() => setIsOpen(false)}/>}
        </>
    );
}

export default Contact;