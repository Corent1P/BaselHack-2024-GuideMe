import { prisma } from '../global.js';

export class GuidelineRepository {
  async getAllGuidelines() {
    return await prisma.guideline.findMany();
  }

  async getGuidelineById(id) {
    return await prisma.guideline.findUniqueOrThrow({ where: { id }});
  }

  async createGuideline(guidelineData) {
    return await prisma.guideline.create({ data: guidelineData });
  }

  async updateGuideline(id, guidelineData) {
    return await prisma.guideline.update({ where: { id }, data: guidelineData });
  }

  async deleteGuideline(id) {
    return await prisma.guideline.delete({ where: { id } });
  }
}
