import { User } from "../entity/User";
import { BioDetail } from "../entity/BioDetail";

export const bioDetailsResolver = async () => {
  return await BioDetail.find();
};

export const bioDetailResolver = async (_: any, { id }: { id: number }) => {
  return await BioDetail.findOneByOrFail({ id });
};

export const createBioDetailsMutation = async (
  _: any,
  {
    bioDetails,
  }: {
    bioDetails: Array<{
      question: string;
      response: string;
    }>;
  },
  context: any
) => {
  const results = [];
  for (const bioDetail of bioDetails) {
    const newBioDetail = new BioDetail();
    newBioDetail.question = bioDetail.question;
    newBioDetail.response = bioDetail.response;
    newBioDetail.owner = User.findOneByOrFail({ id: context.userId });
    const result = await newBioDetail.save();
    results.push(result);
  }

  return results;
};
