import { useState, useRef } from "react";
import type { ChangeEvent, SubmitEvent } from "react";
import { validateField } from "./validateField";
import styles from "./Contact.module.css";

type Props = {
    openModal: () => void;
};

export default function Contact({openModal}: Props) {
    type TFormField = "name" | "tel" | "content" | "agree";

    interface IFormConfigs {
        required: boolean;
        pattern?: RegExp;
        format?: string;
        action?: string;
    }

    type TFormErrors = Partial<Record<TFormField, string>>;

    // 유효성 검사가 필요한 입력 필드의 규칙 정의
    const formConfigs: Record<TFormField, IFormConfigs> = {
        name: {
            required: true
        },
        tel: {
            required: true,
            pattern: new RegExp("^[0-9]{9,11}$"),
            format: "연락처"
        },
        content: {
            required: true
        },
        agree: {
            required: true,
            action: "동의"
        }
    };

    // 폼 전체 데이터
    const [formValues, setFormValues] = useState({              
        name: "",
        tel: "",
        car: "",
        content: "",
        agree: false
    });
    const [formErrors, setFormErrors] = useState<TFormErrors>({});
    const [hasSubmitted, setHasSubmitted] = useState(false);    // 제출 시도 여부 (실시간 유효성 검증 트리거)
    const [isSubmitting, setIsSubmitting] = useState(false);    // 제출 진행 상태
    const formRef = useRef<HTMLFormElement>(null);

    // onSubmit에 등록할 이벤트 핸들러
    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        let computedFormErrors: TFormErrors = {};    // 반복문 내에서 폼 에러 메시지를 누적하는 객체로, 최종 결과는 formErrors에 전달
        let firstErrorName = "";
        
        e.preventDefault();
        setHasSubmitted(true);
 
        Object.entries(formValues).forEach(([name, value]) => {
            const key = name as TFormField;
            
            if(!formConfigs[key]) return;

            const inputValue = value;
            const inputPattern = formConfigs[key]?.pattern;
            const inputAction = formConfigs[key]?.action;
            const inputFormat = formConfigs[key]?.format;

            computedFormErrors[key] = validateField({value: inputValue, pattern: inputPattern, action: inputAction, format: inputFormat});

            if(!firstErrorName && computedFormErrors[key]) {
                firstErrorName = name;
            }
        });

        setFormErrors(computedFormErrors);

        // 에러 있을 시, 첫번째 에러 필드에 자동 스크롤 및 포커스
        if(firstErrorName && formRef.current) {
            const firstErrorField = formRef.current.querySelector(`[name="${firstErrorName}"]`) as HTMLInputElement | HTMLTextAreaElement;
            firstErrorField.scrollIntoView({behavior: "smooth", block: "center"});
            firstErrorField.focus();
        } else {
            // 에러 없을 시, 서버에 폼 제출
            submitForm();
        }
    }

    // 폼 제출 로직
    const submitForm = async () => {
        try {
            setIsSubmitting(true);

            /* 폼 제출 대신 1초 딜레이 (mock)
               1초 후에 Promise를 성공 상태로 변환 후 종료 */
            await new Promise((resolve) => setTimeout(resolve, 1000));

            /*
            await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formValues)
            }); 
            */

            alert("문의가 정상적으로 접수되었습니다.");

            // 폼 제출 후 폼 초기화
            setFormValues({
                name: "",
                tel: "",
                car: "",
                content: "",
                agree: false
            });

            setHasSubmitted(false);
        } catch(error) {
            alert("제출 중 오류가 발생했습니다.");
        } finally {
            setIsSubmitting(false);
        }
    }

    // onChange에 등록할 이벤트 핸들러
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const input = e.target;
        const inputName = input.name as TFormField;
        const inputValue = (input instanceof HTMLInputElement && input.type === "checkbox")
            ? input.checked
            : input.value;
        const inputPattern = formConfigs[inputName]?.pattern;
        const inputAction = formConfigs[inputName]?.action;
        const inputFormat = formConfigs[inputName]?.format;

        setFormValues(prev => ({
            ...prev,
            [inputName]: inputValue
        }));

        // 제출 버튼 클릭 이후에만 실시간 유효성 검증 활성화 
        if(!hasSubmitted && !formConfigs[inputName]) return;

        setFormErrors(prev => ({
            ...prev,
            [inputName]: validateField({value: inputValue, pattern: inputPattern, action: inputAction, format: inputFormat})
        }));
    }

    return (
        <section id="contact" className={`section bg-[#054095] ${styles.section}`}>
            <div className="content-wrapper">
                <h2 className="sec-title" data-aos="fade-up" data-aos-anchor-placement="center-top" data-aos-delay="400" data-aos-easing="ease-in">
                    <span className="font-extrabold">궁금한 점</span>이 있으신가요?
                </h2>

                {/* ---------- Form ---------- */}
                <form className="flex flex-col gap-md w-full p-40 bg-white rounded-[10px] desktop:max-w-900" noValidate onSubmit={handleSubmit} ref={formRef} data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="500">

                    {/* ---------- User Info (Name, Tel) ---------- */}
                    <fieldset className="flex flex-col laptop:flex-row gap-md">
                        <legend className="sr-only">사용자 정보</legend>
                        <div className={`flex-1 ${styles.formField}`}>
                            <label htmlFor="name" className={styles.label}>
                                이름 <span className={styles.essential} aria-hidden="true">*</span>
                            </label>
                            <input type="text" id="name" className={`${styles.input} ${formErrors.name ? styles.error : ""}`} name="name" placeholder="이름을 입력하세요" required onChange={handleChange} value={formValues.name} aria-invalid={!!formErrors.name} aria-describedby={formErrors.name ? "name-error" : undefined} />
                            <p id="name-error" className={styles.errorMessage} aria-hidden={!formErrors.name}>{formErrors.name}</p>
                        </div>
                        <div className={`flex-1 ${styles.formField}`}>
                            <label htmlFor="tel" className={styles.label}>
                                연락처 <span className={styles.essential} aria-hidden="true">*</span>
                            </label>
                            <input type="tel" id="tel" className={`${styles.input} ${formErrors.tel ? styles.error : ""}`} name="tel" placeholder="연락처를 입력하세요 (숫자만)" required inputMode="numeric" onChange={handleChange} value={formValues.tel} aria-invalid={!!formErrors.tel} aria-describedby={formErrors.tel ? "tel-error" : undefined} />
                            <p id="tel-error" className={styles.errorMessage} aria-hidden={!formErrors.tel}>{formErrors.tel}</p>
                        </div>
                    </fieldset>

                    {/* ---------- Extra Info (Car, Content) ---------- */}
                    <div className={styles.formField}>
                        <label htmlFor="car-info" className={styles.label}>희망 차종</label>
                        <input type="text" className={styles.input} id="car-info" name="car" placeholder="희망 차종을 입력하세요" onChange={handleChange} value={formValues.car} />
                    </div>
                    <div className={styles.formField}>
                        <label htmlFor="content" className={styles.label}>
                            문의 내용 <span className={styles.essential} aria-hidden="true">*</span>
                        </label>
                        <textarea className={`h-250 laptop:h-200 ${styles.input} ${formErrors.content ? styles.error : ""}`} id="content" name="content" placeholder="문의 내용을 입력하세요" required onChange={handleChange} value={formValues.content} aria-invalid={!!formErrors.content} aria-describedby={formErrors.content ? "content-error" : undefined}></textarea>
                        <p id="content-error" className={styles.errorMessage} aria-hidden={!formErrors.content}>{formErrors.content}</p>
                    </div>
                    
                    {/* ---------- Policy & Submit ---------- */}
                    <div className="w-full mt-20 flex justify-between items-center relative">
                        <p className={`py-xs absolute top-0 left-0 -translate-y-full ${styles.formGuide}`}>
                            <span className={styles.essential}>*</span>는 필수 입력 항목입니다
                        </p>
                        <label className="flex items-center gap-5">
                            <input type="checkbox" className={`absolute opacity-0 ${styles.checkbox}`} name="agree" required onChange={handleChange} checked={formValues.agree} aria-invalid={!!formErrors.agree} aria-describedby={formErrors.agree ? "agree-error" : undefined} />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={`size-14 text-[#CCCCCC] laptop:size-20 ${styles.customCheckbox}`}>
                                <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                            </svg>
                            <span className={styles.agreeLabel}>[필수] 개인정보 수집 및 이용 동의</span>
                        </label>
                        <button type="button" className="h-44 px-xs text-body-sm bg-(--color-blue-50)" onClick={openModal} aria-controls="privacy-modal">전문 보기</button>
                        <p id="agree-error" className={styles.errorMessage} aria-hidden={!formErrors.agree}>{formErrors.agree}</p>
                    </div>
                    <button type="submit" className="py-12 mt-md w-full text-body-lg bg-(--color-blue-50) rounded-full laptop:py-15" disabled={isSubmitting}>
                        {isSubmitting ? "제출 중..." : "문의하기" }
                    </button>
                </form>
            </div>
        </section>
    );
}

