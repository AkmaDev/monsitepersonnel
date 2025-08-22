"use client";
import { CheckCircle, Clock, MapPin, MessageCircle, Star } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

interface Candidate {
  id: string;
  name: string;
  title: string;
  location: string;
  hourlyRate: string;
  rating: number;
  completedProjects: number;
  avatar: string;
  bio: string;
  skills: string[];
  experience: string[];
}

interface CandidateProfileProps {
  candidate: Candidate;
}

const CandidateProfile = ({ candidate }: CandidateProfileProps) => {
  const initials = (myName: string) => {
    return myName
      .split(" ", 2)
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };
  return (
    <div className="space-y-4 pt-10 max-w-4xl">
      {/* 1ere Partie */}
      <Card>
        <CardContent className="flex flex-row space-x-6">
          {candidate.avatar ? (
            <Image
              src={candidate.avatar || "/profile-user.png"}
              alt={candidate.name}
              width={80}
              height={80}
              className="rounded-full border-2 border-muted"
            />
          ) : (
            <div className="flex-shrink-0 w-21 h-21 rounded-full bg-primary flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-amber-600 flex justify-center items-center font-bold">
                {initials(candidate.name)}
              </div>
            </div>
          )}

          <div className="flex justify-between w-full">
            <div className="">
              <h1>{candidate.name}</h1>
              <p className="text-muted-foreground">{candidate.title}</p>
              <div className="flex gap-6 pt-3 items-center">
                <p className="flex gap-1 items-center text-sm">
                  <MapPin className="h-4 w-4" /> {candidate.location}
                </p>
                <p className="flex gap-1 items-center text-sm">
                  <Clock className="h-4 w-4" /> {candidate.hourlyRate}
                </p>
              </div>
            </div>

            <div className="">
              <div className="flex flex-col gap-4">
                <div className="flex gap-1 items-center">
                  <Star
                    className="text-amber-400 w-5 h-5 pb-0.5"
                    fill="currentColor"
                  />
                  <span className="font-bold">4.9</span>
                  <span className="text-sm text-muted-foreground">
                    ({candidate.completedProjects} projets)
                  </span>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="cursor-pointer">
                      <MessageCircle /> Démarrer l&apos;entretien IA
                    </Button>
                  </DialogTrigger>
                  <DialogContent></DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 2eme Partie */}

        <div className="flex flex-col md:col-span-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>À propos</CardTitle>
              <CardDescription>{candidate.bio}</CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Expérience récente</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {candidate.experience.map((n) => (
                <p key={n} className="flex flex-row gap-3 text-sm">
                  <CheckCircle className="w-5 h-5" />{" "}
                  <span className="text-muted-foreground ">{n}</span>
                </p>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* 3eme Partie */}

        <Card>
          <CardHeader>
            <CardTitle>Compétences</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {candidate.skills.map((n) => (
              <span key={n} className="rounded-lg bg-muted p-2">
                {n}
              </span>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CandidateProfile;
