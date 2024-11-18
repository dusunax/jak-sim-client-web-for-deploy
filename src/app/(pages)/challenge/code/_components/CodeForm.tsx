'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import InputWithError from "@/components/input/InputWithErrorMsg";
import Button from "@/components/button/Button";
import ChallengeCard from "../../_components/ChallengeCard";

interface Challenge {
  id: number;
  name: string;
}

export default function CodeForm() {
  const router = useRouter();
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  
  const { register, handleSubmit, formState: {errors}, watch,setError } = useForm({defaultValues:{code: ""}});

  const onSubmit = (data: any) => {
    if(!data.code) return;
    const response = true;

    if(response) {
      router.push(`/challenge/code/success?challengeId=${challenge?.id}`);
    } else {
      setError("code", {message: "챌린지에 참여할 수 없어요"});
    }
  };
  const code = watch("code");

  useEffect(() => {
    const checkCode = async () => {
      if (!code) return;

      try {
        console.log(code); 
        if(code === '123456') {
          setChallenge({id: 1, name: "챌린지 이름"});
        } else {
          setChallenge(null);
        }
      } catch (error) {
        setError("code", {message: "해당 코드로는 챌린지가 확인되지 않아요"});
      }
    };
    checkCode();
  }, [code]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-full flex flex-col justify-between p-4">
      <InputWithError
        {...register("code", {required: "코드를 입력해주세요", pattern:{value: /^[A-Z0-9]+$/, message: "대문자와 숫자만 입력해 주세요"}})}
        placeholder="대문자와 숫자만 입력해 주세요"
        hasError={!!errors.code}
        errorMessage={errors.code?.message || ""}
        autoComplete="off"
      />
      <div className="flex-1">
        {challenge && <ChallengeCard />}
      </div>
      <Button type="submit" disabled={!challenge}>{challenge ? "챌린지 참여하기" : "해당 코드를 확인해 주세요"}</Button>
    </form>
  )
}